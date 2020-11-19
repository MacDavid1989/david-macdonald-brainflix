import './Main.scss';
import Article from "../Article/Article";
import VideoComments from "../VideoComments/VideoComments";
import convertTime from '../../utils/convertTime';

// component wrapper for components that require flex control layout to position next to aside component
function Main({mainVideo, onComment, onDelete, onCommentLike, onVideoLike}) {
    return (
        <main className="main">
            <Article 
                mainVideo={mainVideo} 
                onVideoLike={onVideoLike}
                convertTime={convertTime}
            />
            <VideoComments 
                comments={mainVideo.comments}
                onComment={onComment}
                onDelete={onDelete}
                onCommentLike={onCommentLike}
                convertTime={convertTime}
            />
        </main>
    );
};

export default Main;