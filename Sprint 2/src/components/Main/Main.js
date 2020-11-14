import './Main.scss';
import convertTime from '../../utils/convertTime';
import Article from "../Article/Article";
import VideoComments from "../VideoComments/VideoComments";

function Main({history, match, mainVideo, onCommentClick}) {

    return (
        <main className="main">
            <Article 
                mainVideo={mainVideo} 
                convertTime={convertTime}
            />
            <VideoComments 
                history={history}
                match={match} 
                comments={mainVideo.comments} 
                convertTime={convertTime}
            />
        </main>
    )
};

export default Main;