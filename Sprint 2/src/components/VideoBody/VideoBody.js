import './VideoBody.scss';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';


function VideoBody({history, match, mainVideo, videoList}) {
    
    return (
        <div className="video__body">
            <Main
                history={history}
                match={match} 
                mainVideo={mainVideo}
            />
			<Aside videoList={videoList}/>
        </div>
    )
};

export default VideoBody;