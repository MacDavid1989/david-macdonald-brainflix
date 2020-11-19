import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';

// App component utilized as top router to mount all other components
function App() {
	return (
		<div className="app">
			<Router>
				{/* Searchbar component shared with all routes */}
				<SearchBar />
				<Switch>
					{/* Home route with default video */}
					<Route path="/" exact component={Home}/>
					{/* Upload route */}
					<Route path="/upload" component={Upload}/>
					{/* Home route rendered with specified video based on id */}
					<Route path="/:id" component={Home}/>
				</Switch>
			</Router>
		</div>
	);
};

export default App;