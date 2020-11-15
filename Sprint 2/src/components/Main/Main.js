import './Main.scss';
import Article from "../Article/Article";
import VideoComments from "../VideoComments/VideoComments";
import convertTime from '../../utils/convertTime';

// component wrapper for components that require flex control layout to position next to aside component
function Main({match, mainVideo, onComment, onDelete}) {

    return (
        <main className="main">
            <Article 
                mainVideo={mainVideo} 
                convertTime={convertTime}
            />
            <VideoComments 
                match={match} 
                comments={mainVideo.comments}
                onComment={onComment}
                onDelete={onDelete}
                convertTime={convertTime}
            />
        </main>
    )
};

export default Main;