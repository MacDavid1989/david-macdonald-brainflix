import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'
import SearchBar from './components/SearchBar/SearchBar';

function App(props) {
	return (
		<div className="app">
			<Router>
				<SearchBar />
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/upload" component={Upload}/>
					<Route path="/:id" component={Home}/>
				</Switch>
			</Router>
		</div>
	);

};

export default App;