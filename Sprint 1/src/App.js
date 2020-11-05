import React from 'react';
import './App.scss';
import Home from './pages/Home';
import {mainVideo, videoList} from './utils/Data';
import convertTime from './utils/convertTime';

class App extends React.Component {
	state = {
		mainVideo: mainVideo,
		videoList: videoList
	};

	render() {
		return (
		<Home 
			mainVideo={this.state.mainVideo} 
			videoList={this.state.videoList} 
			convertTime={convertTime}
		/>
		)
	};
};

export default App;