import './Main.scss';
import Article from "../Article/Article";
import Comments from "../Comments/Comments";
import convertTime from '../../utils/convertTime';

function Main({mainVideo, onCommentClick}) {
    return (
        <main className="main">
            <Article 
                mainVideo={mainVideo} 
                convertTime={convertTime}
            />
            <Comments 
                comments={mainVideo.comments} 
                convertTime={convertTime}
                onCommentClick={onCommentClick}
            />
        </main>
    )
};

export default Main;