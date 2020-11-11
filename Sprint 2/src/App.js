import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'

class App extends React.Component {

	render() {
		return (
			<>
				<Home />
				<Upload />		
			</>
		)
	};
};

export default App;