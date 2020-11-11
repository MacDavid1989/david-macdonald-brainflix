import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, NavLink} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'

class App extends React.Component {

	render() {
		return (
			<>
				<Router>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/:videoId">
							<Home />
						</Route>
						<Route path="/upload" >
							<Upload />		
						</Route>
					</Switch>
				</Router>
			</>
		)
	};
};

export default App;