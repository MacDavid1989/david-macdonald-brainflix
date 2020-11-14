import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'
import SearchBar from './components/SearchBar/SearchBar';

function App(props) {
	return (
		<>
			<Router>
				<SearchBar />
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/upload" exact component={Upload}/>
					<Route path="/:id" component={Home}/>
				</Switch>
			</Router>
		</>
	);

};

export default App;