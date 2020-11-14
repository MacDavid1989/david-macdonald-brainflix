import React, {Component} from 'react';
import {API_KEY} from '../../utils/apiKey'
import axios from 'axios';
import './Home.scss';
import Header from '../../components/Header/Header';
import VideoBody from '../../components/VideoBody/VideoBody';
class Home extends Component {

	state = {
		mainVideo: null,
		videoList: []
	};

	componentDidMount() {

		if(!this.state.mainVideo){
			axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
			.then(mainVideo => {
				axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
				.then(videoList => {
					this.setState({mainVideo: mainVideo.data, videoList: videoList.data})
				})
				.catch(console.error)
			})
			.catch(console.error)	
		}
	}

	handleSearchSubmit = (e, form) => {
		e.preventDefault();
		form.reset();
	};

	handleCommentSubmit = (e, form) => {
		e.preventDefault();
		form.reset();
	};

	handleUploadSubmit = (e, form) => {
		e.preventDefault();
		form.reset();
	};

	render() {
		console.log(this.props.match)

		const {mainVideo, videoList, onCommentClick, onSearchClick} = this.props;
		return (
			<>
				<Header 
					mainVideo={mainVideo}
					onSearchClick={onSearchClick}
				/>
				<VideoBody 
					mainVideo={mainVideo} 
					videoList={videoList}
					onCommentClick={onCommentClick}
				/>
			</>
		)
	};
};

export default Home;