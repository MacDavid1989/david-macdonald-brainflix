import React from 'react';
import './App.scss';
import Home from './pages/Home';
import {mainVideo, videoList} from './utils/Data';

class App extends React.Component {
	state = {
		mainVideo: mainVideo,
		videoList: videoList
	};

	convertTime(timestamp) {
		const currentTime = new Date().getTime();

		const time = Math.abs(currentTime - timestamp)/1000;

		if ((time/31536000) > 1) {
			return Math.floor(time/31536000) + " years ago";
		} 
			else if ((time/2592000) > 1) {
				return Math.floor(time/2592000) + " months ago";
		} 
			else if ((time/86400) > 1) {
				return Math.floor(time/86400) + " days ago";
		} 
			else if ((time/3600) > 1) {
				return Math.floor(time/3600) + " hours ago";
		} 
			else if ((time/60) > 1) {
				return Math.floor(time/60) + " minutes ago";
		} 
			else {
				return Math.floor(time) + " seconds ago";
		}
	};

	render() {
		return (
		<Home 
			mainVideo={this.state.mainVideo} 
			videoList={this.state.videoList} 
			convertTime={this.convertTime}
		/>
		)
	};
};

export default App;