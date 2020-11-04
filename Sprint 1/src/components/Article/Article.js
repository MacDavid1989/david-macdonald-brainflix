import Likes from '../../assets/icons/svg/icon-likes.svg';
import Views from '../../assets/icons/svg/icon-views.svg';

function Article(props) {
    return (
        <article>
            <h1>{props.mainVideo.title}</h1>
            <div>
                <div>
                    <h2>{props.mainVideo.channel}</h2>
                    <h5>{props.convertTime(props.mainVideo.timestamp)}</h5>
                </div>
                <div>
                    <div>
                        <img src={Views} alt=""/>
                        <span>{props.mainVideo.views}</span>
                    </div>
                    <div>
                        <img src={Likes} alt=""/>
                        <span>{props.mainVideo.likes}</span>
                    </div>
                </div>
            </div>
            <p>
                {props.mainVideo.description}
            </p>
        </article>
    )
}

export default Article;