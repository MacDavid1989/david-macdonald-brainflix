import './Main.scss';
import convertTime from '../../utils/convertTime';
import Article from "../Article/Article";
import VideoComments from "../VideoComments/VideoComments";

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