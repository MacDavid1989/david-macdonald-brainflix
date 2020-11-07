import './Main.scss';
import Article from "../Article/Article";
import Comments from "../Comments/Comments";
import convertTime from '../../utils/convertTime';

function Main(props) {
    return (
        <main className="main">
            <Article mainVideo={props.mainVideo} convertTime={convertTime}/>
            <Comments comments={props.mainVideo.comments} convertTime={convertTime}/>
        </main>
    )
};

export default Main;