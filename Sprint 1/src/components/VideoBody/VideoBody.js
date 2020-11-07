import './VideoBody.scss';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';


function VideoBody(props) {
    return (
        <div className="video__body">
            <Main mainVideo={props.mainVideo}/>
			<Aside videoList={props.videoList}/>
        </div>
    )
};

export default VideoBody;