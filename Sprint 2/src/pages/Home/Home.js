import React, {Component} from 'react';
import {API_KEY} from '../../utils/apiKey'
import {defaultVideoId} from '../../utils/defaultVideoId'
import axios from 'axios';
import './Home.scss';
import VideoBody from '../../components/VideoBody/VideoBody';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

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
			.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
			.catch(console.error)
			
			// get request for video list
			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			// after successful response, changes state to hold a video list with all videos that do not match the default video id
			.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== defaultVideoId)}))
			.catch(console.error)

		} else {

			// get request for video matching the video id contained within the match route prop params object id key
			axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
			.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
			.catch(console.error)	

			// get request for video list
			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			// after successful response, changes state to hold a video list with all videos that do not match the match route prop params object id key
			.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)}))
			.catch(console.error)
		}
	}

	// lifecycle method that is called after the component is updated
	componentDidUpdate(prevProps) {

		// check in place to see if there was a change in the url id and that the current id is not undefined
		if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id !== undefined){
			
			// similar get requests as found in the DidMount method to update state with the correct data
			axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
			.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
			.catch(console.error)	

			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)}))
			.catch(console.error)	

		}
		// alternate condition to check that the id key is undefined which is the case for the home page route
		else if(this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id === undefined) {
			
			// similar get requests as found in the DidMount method to update state with the correct data
			axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
			.then(mainVideo => this.setState({mainVideo: mainVideo.data}))
			.catch(console.error)	
			
			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			.then(videoList => this.setState({videoList: videoList.data.filter(video => video.id !== defaultVideoId)}))
			.catch(console.error)
		}
	}


	handleCommentSubmit=(header, newComment)=>{
		if(this.props.match.url === '/'){
            axios.post(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments${API_KEY}`, newComment, header)
            .then( response => {
                axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
				.then(mainVideo => {
					this.setState({
						mainVideo: mainVideo.data
					})
				})
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {
            axios.post(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments${API_KEY}`, newComment, header)
            .then( response => {
                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
				.then(mainVideo => {
					this.setState({
						mainVideo: mainVideo.data
					})
				})
				.catch(console.error)
            })
            .catch(error => console.error(error));
        }
	}

	handleCommentDelete = (id) => {
		if(this.props.match.url === '/'){
            axios.delete(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments/${id + API_KEY}`)
            .then( response => {
                axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
				.then(mainVideo => {
					this.setState({
						mainVideo: mainVideo.data
					})
				})
				.catch(console.error)	
            })
            .catch(error => console.error(error));
        } else {
            axios.delete(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments/${id + API_KEY}`)
            .then( response => {
                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
				.then(mainVideo => {
					this.setState({
						mainVideo: mainVideo.data
					})
				})
				.catch(console.error)
            })
            .catch(error => console.error(error));
        }
	}

	render() {

		return (
			<>
				{this.state.mainVideo && <VideoPlayer mainVideo={this.state.mainVideo} />}
				{this.state.mainVideo && <VideoBody history={this.props.history} match={this.props.match} mainVideo={this.state.mainVideo} videoList={this.state.videoList} onComment={this.handleCommentSubmit} onDelete={this.handleCommentDelete}/>}
			</>
		)
	};
};

export default Home;