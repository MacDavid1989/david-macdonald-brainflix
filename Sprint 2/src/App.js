import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { mainVideo, videoList } from './utils/videoData';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'

class App extends React.Component {

	state = {
		mainVideo: mainVideo,
		videoList: videoList
	};

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
		return (
			<>
				<Router>
					<Switch>
						<Route path="/" exact component={() => 
							<Home 
								mainVideo={this.state.mainVideo} 
								videoList={this.state.videoList} 
								onCommentClick={this.handleCommentSubmit} 
								onSearchClick={this.handleSearchSubmit}
							/>
						}/>
						<Route path="/upload" >
							<Upload 
								onSearchClick={this.handleSearchSubmit}
								onPublishClick={this.handleUploadSubmit}
							/>		
						</Route>
						{/* <Route path="/:videoID" render={() => {
							<Home 
								mainVideo={this.state.mainVideo} 
								videoList={this.state.videoList} 
								onCommentClick={this.handleCommentSubmit} 
								onSearchClick={this.handleSearchSubmit}
							/>
						}}/> */}
					</Switch>
				</Router>
			</>
		)
	};
};

export default App;