import React, {Component} from 'react';
import {defaultVideoId} from '../../utils/defaultVideoId'
import {API_KEY} from '../../utils/apiKey'
import axios from 'axios';
import VideoBody from '../../components/VideoBody/VideoBody';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

// Home class component which holds state for the project and utilizes lifecycle methods
class Home extends Component {

	// Default state which will be updated to hold the main video and an array of all videos
	state = {
		mainVideo: null,
		videoList: []
	};

	// lifecycle method that is called after the component first renders
	componentDidMount() {

		// check in place to see if the current route is the home path 
		if(this.props.match.url === '/'){

			// get request for default video utilizing default video id
			axios.get(`https://project-2-api.herokuapp.com/videos/${defaultVideoId + API_KEY}`)
			// after successful response, changes state to hold default video matching default id
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				// get request for video list
				axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
				// after successful response, changes state to hold a video list with all videos that do not match the default video id
				.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== defaultVideoId)}))
				.catch(console.error)
			})
			.catch(console.error)
		} else {

			// get request for video matching the video id contained within the match route prop params object id key
			axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				// get request for video list
				axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
				// after successful response, changes state to hold a video list with all videos that do not match the match route prop params object id key
				.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)}))
				.catch(console.error)
			})
			.catch(console.error)	
		}
	}

	// lifecycle method that is called after the component is updated
	componentDidUpdate(prevProps) {

		// check in place to see if there was a change in the url id and that the current id is not undefined
		if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id !== undefined){
			
			// similar get requests as found in the DidMount method to update state with the correct data
			axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
				.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)}))
				.catch(console.error)	
			})
			.catch(console.error)	

			

		}
		// alternate condition to check that the id key is undefined which is the case for the home page route
		else if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id === undefined) {
			
			// similar get requests as found in the DidMount method to update state with the correct data
			axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
			.then(mainVideo => {
				this.setState({mainVideo: mainVideo.data});

				axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
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
            axios.post(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}/comments${API_KEY}`, newComment, header)
            .then( () => {
				// after a successful post a get request is made for the default video and state is changed  
                axios.get(`https://project-2-api.herokuapp.com/videos/${defaultVideoId + API_KEY}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {

			// post request to add a newComment object to the comments array of the video with id matching the id key of the params object
            axios.post(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments${API_KEY}`, newComment, header)
            .then( () => {
				// after a successful post a get request is made for the video with that same id and state is changed  
                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
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
            axios.delete(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}/comments/${id + API_KEY}`)
            .then( () => {
                axios.get(`https://project-2-api.herokuapp.com/videos/${defaultVideoId + API_KEY}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {

			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.delete(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments/${id + API_KEY}`)
            .then( () => {
                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
				.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
				.catch(console.error)
            })
            .catch(error => console.error(error));
        }
	}

	// called when the like button is clicked
	handleCommentLike = (id) => {
		alert('Like Functionality Not Yet Available')
	// 	// check if the current route is the home page 
	// 	if(this.props.match.url === '/'){

	// 		// similar to delete instead the comment matching the provided id will update the like value
    //         axios.put(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}/comments/${id + '/like' + API_KEY}`)
    //         .then( () => {
    //             axios.get(`https://project-2-api.herokuapp.com/videos/${defaultVideoId + API_KEY}`)
	// 			.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
	// 			.catch(console.error)	
    //         })
    //         .catch(error => console.error(error));
    //     } else {

	// 		// similar to delete instead the comment matching the provided id will update the like value
    //         axios.put(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments/${id + '/like' + API_KEY}`)
    //         .then( () => {
    //             axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
	// 			.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
	// 			.catch(console.error)
    //         })
    //         .catch(error => console.error(error));
    //     }
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