import './VideoBody.scss';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';


function VideoBody({mainVideo, videoList}) {
    return (
        <div className="video__body">
            <Main mainVideo={mainVideo}/>
			<Aside videoList={videoList}/>
        </div>
    )
};

export default VideoBody;