import './VideoBody.scss';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

// wrapper component for components mounted beneath video player
function VideoBody({mainVideo, videoList, onComment, onDelete, onLike}) {
    return (
        <div className="video__body">
            <Main
                mainVideo={mainVideo}
                onComment={onComment}
                onDelete={onDelete}
                onLike={onLike}
            />
			<Aside videoList={videoList}/>
        </div>
    );
};

export default VideoBody;