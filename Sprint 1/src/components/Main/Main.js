import Article from "../Article/Article";
import Comments from "../Comments/Comments";

function Main(props) {
    return (
        <main className="main">
            <Article mainVideo={props.mainVideo} convertTime={props.convertTime}/>
            <Comments  comments={props.mainVideo.comments} convertTime={props.convertTime}/>
        </main>
    )
};

export default Main;