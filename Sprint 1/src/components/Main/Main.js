import Article from "../Article/Article";
import Comments from "../Comments/Comments";

function Main(props) {
    return (
        <main>
            <Article mainVideo={props.mainVideo}/>
            <Comments  comments={props.mainVideo.comments}/>
        </main>
    );
}

export default Main;