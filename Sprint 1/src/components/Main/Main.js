import './Main.scss';
import Article from "../Article/Article";
import Comments from "../Comments/Comments";
import convertTime from '../../utils/convertTime';

function Main({mainVideo}) {
    return (
        <main className="main">
            <Article mainVideo={mainVideo} convertTime={convertTime}/>
            <Comments comments={mainVideo.comments} convertTime={convertTime}/>
        </main>
    )
};

export default Main;