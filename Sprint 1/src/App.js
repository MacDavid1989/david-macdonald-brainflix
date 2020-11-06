import React from 'react';
import './App.scss';
import { mainVideo, videoList } from './utils/Data';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';

class App extends React.Component {
	state = {
		mainVideo: mainVideo,
		videoList: videoList
	};

	render() {
		return (
			<>
            <Header mainVideo={this.state.mainVideo}/>
            <Main mainVideo={this.state.mainVideo}/>
            <Aside videoList={this.state.videoList}/>
        </>
		)
	};
};

export default App;