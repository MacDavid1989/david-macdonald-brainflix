import './VideoBody.scss';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

// wrapper component for components mounted beneath video player
function VideoBody({mainVideo, videoList, onComment, onDelete}) {
    
    return (
        <div className="video__body">
            <Main
                mainVideo={mainVideo}
                onComment={onComment}
                onDelete={onDelete}
            />
			<Aside videoList={videoList}/>
        </div>
    )
};

export default VideoBody;