import React from 'react';
import './App.scss';
import { mainVideo, videoList } from './utils/videoData';
import Header from './components/Header/Header';
import VideoBody from './components/VideoBody/VideoBody';

class App extends React.Component {
	state = {
		mainVideo: mainVideo,
		videoList: videoList
	};

	handleSearchSubmit = (e, form) => {
		e.preventDefault();
		form.reset();
	}

	handleCommentSubmit = (e, form) => {
		e.preventDefault();
		form.reset();
	}

	render() {
		return (
			<>
				<Header 
					mainVideo={this.state.mainVideo}
					onSearchClick={this.handleSearchSubmit}
				/>
				<VideoBody 
					mainVideo={this.state.mainVideo} 
					videoList={this.state.videoList}
					onCommentClick={this.handleCommentSubmit}
				/>
			</>
		)
	};
};

export default App;