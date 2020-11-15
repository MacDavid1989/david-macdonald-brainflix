import './Main.scss';
import convertTime from '../../utils/convertTime';
import Article from "../Article/Article";
import VideoComments from "../VideoComments/VideoComments";

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