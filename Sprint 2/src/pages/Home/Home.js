import React, {Component} from 'react';
import {API_KEY} from '../../utils/apiKey'
import axios from 'axios';
import './Home.scss';
import VideoBody from '../../components/VideoBody/VideoBody';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

class Home extends Component {

	state = {
		mainVideo: null,
		videoList: []
	};

	componentDidMount() {
		if(this.props.match.url === '/'){
			axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
			.then(mainVideo => {
				this.setState({
					mainVideo: mainVideo.data
				})
			})
			.catch(console.error)	
			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			.then(videoList => {
				this.setState(
					{
						videoList: videoList.data.filter(video => video.id !== '1af0jruup5gu')
					})
			})
			.catch(console.error)
		} else {
			axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
			.then(mainVideo => {
				this.setState({
					mainVideo: mainVideo.data
				})
			})
			.catch(console.error)	
			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			.then(videoList => {
				this.setState(
					{
						videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)
					})
			})
			.catch(console.error)
		}
	}

	componentDidUpdate(prevProps) {

		if(this.props.match.params.id !== prevProps.match.params.id){
			axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id  + API_KEY}`)
			.then(mainVideo => {
				this.setState({
					mainVideo: mainVideo.data
				})
			})
			.catch(console.error)	
			axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
			.then(videoList => {
				this.setState(
					{
						videoList: videoList.data.filter(video => video.id !== this.props.match.params.id)
					})
			})
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

	render() {

		return (
			<>
				{this.state.mainVideo && <VideoPlayer mainVideo={this.state.mainVideo} />}
				{this.state.mainVideo && <VideoBody history={this.props.history} match={this.props.match} mainVideo={this.state.mainVideo} videoList={this.state.videoList} onComment={this.handleCommentSubmit}/>}
			</>
		)
	};
};

export default Home;