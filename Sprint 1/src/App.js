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

	render() {
		return (
			<>
				<Header mainVideo={this.state.mainVideo}/>
				<VideoBody 
					mainVideo={this.state.mainVideo} 
					videoList={this.state.videoList}
				/>
			</>
		)
	};
};

export default App;