import './VideoBody.scss';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

// wrapper component for components mounted beneath video player
function VideoBody({mainVideo, videoList, onComment, onDelete, onCommentLike, onVideoLike}) {
    return (
        <div className="video__body">
            <Main
                mainVideo={mainVideo}
                onComment={onComment}
                onDelete={onDelete}
                onCommentLike={onCommentLike}
                onVideoLike={onVideoLike}
            />
			<Aside videoList={videoList}/>
        </div>
    );
};

export default VideoBody;