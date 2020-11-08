import './Main.scss';
import Article from "../Article/Article";
import VideoComments from "../VideoComments/VideoComments";
import convertTime from '../../utils/convertTime';

function Main({mainVideo, onCommentClick}) {
    return (
        <main className="main">
            <Article 
                mainVideo={mainVideo} 
                convertTime={convertTime}
            />
            <VideoComments 
                comments={mainVideo.comments} 
                convertTime={convertTime}
                onCommentClick={onCommentClick}
            />
        </main>
    )
};

export default Main;