import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import VideoBody from '../../components/VideoBody/VideoBody';

class Home extends React.Component {

	render({mainVideo, videoList, onCommentClick, onSearchClick} = this.props) {
		console.log('here')
		return (
			<>
				<Header 
					mainVideo={mainVideo}
					onSearchClick={onSearchClick}
				/>
				<VideoBody 
					mainVideo={mainVideo} 
					videoList={videoList}
					onCommentClick={onCommentClick}
				/>
			</>
		)
	};
};

export default Home;