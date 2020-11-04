import React from 'react';
import './App.scss';
import Home from './pages/Home';
import {mainVideo, sideVideos} from './utils/Data'
class App extends React.Component {
  state = {
    mainVideo: mainVideo,
    sideVideos: sideVideos
  }

  render() {
    return (
      <Home mainVideo={this.state.mainVideo} videoList={this.state.sideVideos}/>
    );
  }
}

export default App;