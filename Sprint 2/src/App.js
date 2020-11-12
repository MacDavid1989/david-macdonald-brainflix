import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'
import axios from 'axios';
import {API_KEY} from './utils/apiKey'


class App extends React.Component {

	state = {
		mainVideo: null,
		videoList: []
	};

	componentDidMount() {

		if(!this.state.mainVideo){
			axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${API_KEY}`)
			.then(mainVideo => {
				axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
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

		return (
			<>
				<Router>
					<Switch>
						{this.state.mainVideo && 
							<Route path="/" exact render={(props) => 
								<Home 
									{...props}
									mainVideo={this.state.mainVideo} 
									videoList={this.state.videoList} 
									onCommentClick={this.handleCommentSubmit} 
									onSearchClick={this.handleSearchSubmit}
								/>
							}
							/>
						}
						<Route path="/upload" render={(props) => 
							<Upload 
								{...props}
								onSearchClick={this.handleSearchSubmit}
								onPublishClick={this.handleUploadSubmit}
							/>		
						}/>
						{this.state.mainVideo && 
							<Route path={`/${this.state.mainVideo.id}`} render={(props) => 
								<Home 
									{...props}
									mainVideo={this.state.mainVideo} 
									videoList={this.state.videoList} 
									onCommentClick={this.handleCommentSubmit} 
									onSearchClick={this.handleSearchSubmit}
								/>
							}
							/>
						}
					</Switch>
				</Router>
			</>
		)
	};
};

export default App;