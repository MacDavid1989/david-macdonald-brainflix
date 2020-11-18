import React, {Component} from 'react';
import {defaultVideoId} from '../../utils/defaultVideoId'
import axios from 'axios';
import VideoBody from '../../components/VideoBody/VideoBody';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

// Home class component which holds state for the project and utilizes lifecycle methods
class Home extends Component {

	// Default state which will be updated to hold the main video and an array of all remaining videos
	state = {
		mainVideo: null,
		videoList: []
	};

	getVideos = (id) => {
		
			// get request for default video utilizing default video id
			axios.get(`http://localhost:8080/videos/${id}`)
			// after successful response, changes state to hold default video matching default id
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				// get request for video list
				axios.get(`http://localhost:8080/videos`)
				// after successful response, changes state to hold a video list with all videos that do not match the default video id
				.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== id)}))
				.catch(console.error)
			})
			.catch(console.error)

	}

	// lifecycle method that is called after the component first renders
	componentDidMount() {

		// check in place to see if the current route is the home path 
		if(this.props.match.url === '/'){
			this.getVideos(defaultVideoId)
		} else {
			this.getVideos(this.props.match.params.id)
		}
	}

	// lifecycle method that is called after the component is updated
	componentDidUpdate(prevProps) {

		// check in place to see if there was a change in the url id and that the current id is not undefined
		if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id !== undefined){
			
			// similar get requests as found in the DidMount method to update state with the correct data
			axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				axios.get(`http://localhost:8080/videos`)
				.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)}))
				.catch(console.error)	
			})
			.catch(console.error)	

			

		}
		// alternate condition to check that the id key is undefined which is the case for the home page route
		else if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id === undefined) {
			
			// similar get requests as found in the DidMount method to update state with the correct data
			axios.get(`http://localhost:8080/videos/${defaultVideoId}`)
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				axios.get(`http://localhost:8080/videos`)
				.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== defaultVideoId)}))
				.catch(console.error)
			})
			.catch(console.error)	
		}
	}

	// called when the comment form is submitted 
	handleCommentSubmit=(header, newComment)=>{

		// check if the current route is the home page 
		if(this.props.match.url === '/'){

			// post request to add a newComment object to the default video comments array
            axios.post(`http://localhost:8080/videos/${defaultVideoId}/comments`, newComment, header)
            .then( () => {
				// after a successful post a get request is made for the default video and state is changed  
                axios.get(`http://localhost:8080/videos/${defaultVideoId}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {

			// post request to add a newComment object to the comments array of the video with id matching the id key of the params object
            axios.post(`http://localhost:8080/videos/${this.props.match.params.id}/comments`, newComment, header)
            .then( () => {
				// after a successful post a get request is made for the video with that same id and state is changed  
                axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)
            })
            .catch(error => console.error(error));
        }
	}

	// called when the delete button is clicked
	handleCommentDelete = (id) => {

		// check if the current route is the home page 
		if(this.props.match.url === '/'){

			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.delete(`http://localhost:8080/videos/${defaultVideoId}/comments/${id}`)
            .then( () => {
                axios.get(`http://localhost:8080/videos/${defaultVideoId}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {

			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.delete(`http://localhost:8080/videos/${this.props.match.params.id}/comments/${id}`)
            .then( () => {
                axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)
            })
            .catch(error => console.error(error));
        }
	}

	// called when the like button is clicked
	handleCommentLike = (id) => {
		
		// check if the current route is the home page 
		if(this.props.match.url === '/'){

			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.put(`http://localhost:8080/videos/${defaultVideoId}/comments/${id}/likes`)
            .then( () => {
                axios.get(`http://localhost:8080/videos/${defaultVideoId}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {

			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.put(`http://localhost:8080/videos/${this.props.match.params.id}/comments/${id}/likes`)
            .then( () => {
                axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)
            })
            .catch(error => console.error(error));
        }
	}

	render() {

		return (
			<>
				{/* check if mainVideo has been updated from base state before rendering the component */}
				{this.state.mainVideo && <VideoPlayer mainVideo={this.state.mainVideo} />}

				{/* check if mainVideo has been updated from base state before rendering the component */}
				{this.state.mainVideo && <VideoBody 
											mainVideo={this.state.mainVideo} 
											videoList={this.state.videoList} 
											onComment={this.handleCommentSubmit} 
											onDelete={this.handleCommentDelete}
											onLike={this.handleCommentLike}
										/>}
			</>
		)
	};
};

export default Home;