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
			console.log('hey')
			axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
			.then(mainVideo => {
				axios.get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
				.then(videoList => {
					this.setState(
						{
							mainVideo: mainVideo.data, 
							videoList: videoList.data.filter(video => video.id !== '1af0jruup5gu')
						})
				})
				.catch(console.error)
			})
			.catch(console.error)	
		}
	}

	render() {
		// console.log(this.props.match)

		return (
			<>
				{this.state.mainVideo && <Header mainVideo={this.state.mainVideo} />}
				{this.state.mainVideo && <VideoBody mainVideo={this.state.mainVideo} videoList={this.state.videoList}/>}
			</>
		)
	};
};

export default Home;