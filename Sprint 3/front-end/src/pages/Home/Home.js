import React, {Component} from 'react';
import axios from 'axios';
import {defaultVideoId} from '../../utils/defaultVideoId'
import VideoBody from '../../components/VideoBody/VideoBody';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const API_URL = process.env.REACT_APP_API_URL;

// Home class component which holds state for the project and utilizes lifecycle methods
class Home extends Component {
	
	// Default state which will be updated to hold the main video and an array of all remaining videos
	state = {
		mainVideo: null,
		videoList: []
	};

	// function which when called makes a get request to the server for the video matching the id passed as an argument
	getVideos = (id) => {
		// get request for default video utilizing default video id
		axios.get(`${API_URL}/videos/${id}`)
		// after successful response, changes state to hold default video matching default id
		.then(mainVideo => {
			this.setState({mainVideo: mainVideo.data});
			// get request for video list
			axios.get(`${API_URL}/videos`)
			// after successful response, changes state to hold a video list with all videos that do not match the default video id
			.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== id)}))
			.catch(console.error);
		})
		.catch(console.error);
	};

	// lifecycle method that is called after the component first renders
	componentDidMount() {
		// check in place to see if the current route is the home path 
		if(this.props.match.url === '/'){
			this.intervalId = setInterval(()=>this.getVideos(defaultVideoId), 1000);
		} else {
			this.intervalId = setInterval(()=>this.getVideos(this.props.match.params.id), 1000);
		};
	};

	// lifecycle method that is called after the component is updated
	componentDidUpdate(prevProps) {
		// check in place to see if there was a change in the url id and that the current id is not undefined
		if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id !== undefined){
			clearInterval(this.intervalId)
			this.intervalId = setInterval(()=>this.getVideos(this.props.match.params.id), 1000);
		}
		// alternate condition to check that the id key is undefined which is the case for the home page route
		else if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id === undefined){
			clearInterval(this.intervalId)
			this.intervalId = setInterval(()=>this.getVideos(defaultVideoId), 1000);
		};
	};

	// lifecycle method called before un-mounting to clear the setInterval used to re-render data for updates (ie fresh uploads or comments times will be relayed in real time)
	componentWillUnmount() {
		clearInterval(this.intervalId)
	}

	getMainVideo = (id) => {
		axios.get(`${API_URL}/videos/${id}`)
		.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
		.catch(console.error);	
	};

	// called when the comment form is submitted 
	handleCommentSubmit = (header, newComment) => {
		// check if the current route is the home page 
		if(this.props.match.url === '/'){
			// post request to add a newComment object to the default video comments array
            axios.post(`${API_URL}/videos/${defaultVideoId}/comments`, newComment, header)
            .then( () => {
				// after a successful post a get request is made for the default video and state is changed  
                this.getMainVideo(defaultVideoId);
            })
            .catch(error => console.error(error));
        } else {
			// post request to add a newComment object to the comments array of the video with id matching the id key of the params object
            axios.post(`${API_URL}/videos/${this.props.match.params.id}/comments`, newComment, header)
            .then( () => {
				// after a successful post a get request is made for the video with that same id and state is changed  
                this.getMainVideo(this.props.match.params.id);
            })
            .catch(error => console.error(error));
        };
	};

	// called when the delete button is clicked
	handleCommentDelete = (id) => {
		// check if the current route is the home page 
		if(this.props.match.url === '/'){
			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.delete(`${API_URL}/videos/${defaultVideoId}/comments/${id}`)
            .then( () => {
				this.getMainVideo(defaultVideoId);
            })
            .catch(error => console.error(error));
        } else {
			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.delete(`${API_URL}/videos/${this.props.match.params.id}/comments/${id}`)
            .then( () => {
				this.getMainVideo(this.props.match.params.id);
            })
            .catch(error => console.error(error));
        };
	};

	// called when the like button is clicked
	handleCommentLike = (id) => {
		// check if the current route is the home page 
		if(this.props.match.url === '/'){
			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.put(`${API_URL}/videos/${defaultVideoId}/comments/${id}/likes`)
            .then( () => {
				this.getMainVideo(defaultVideoId)
            })
            .catch(error => console.error(error));
        } else {
			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.put(`${API_URL}/videos/${this.props.match.params.id}/comments/${id}/likes`)
            .then( () => {
				this.getMainVideo(this.props.match.params.id);	
            })
            .catch(error => console.error(error));
        };
	};

	// called when the like button is clicked
	handleVideoLike = () => {
		// check if the current route is the home page 
		if(this.props.match.url === '/'){
			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.put(`${API_URL}/videos/${defaultVideoId}/likes`)
            .then( () => {
				this.getMainVideo(defaultVideoId)
            })
            .catch(error => console.error(error));
        } else {
			// similar to post instead the comment matching the provided id will be removed from the comment list
            axios.put(`${API_URL}/videos/${this.props.match.params.id}/likes`)
            .then( () => {
				this.getMainVideo(this.props.match.params.id);	
            })
            .catch(error => console.error(error));
        };
	};

	render() {
		return (
			<>
				{/* check if mainVideo has been updated from base state before rendering the component */}
				{this.state.mainVideo && 
				<VideoPlayer
					params={this.props.match.params} 
					mainVideo={this.state.mainVideo} 
				/>}
				{/* check if mainVideo has been updated from base state before rendering the component */}
				{this.state.mainVideo && 
				<VideoBody 
					mainVideo={this.state.mainVideo} 
					videoList={this.state.videoList} 
					onComment={this.handleCommentSubmit} 
					onDelete={this.handleCommentDelete}
					onCommentLike={this.handleCommentLike}
					onVideoLike={this.handleVideoLike}
				/>}
			</>
		);
	};
};

export default Home;