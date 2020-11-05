import Likes from '../../assets/icons/svg/icon-likes.svg';
import Views from '../../assets/icons/svg/icon-views.svg';

function Article(props) {
    return (
        <article className="video__article">
            <h1 className="video__article-title">{props.mainVideo.title}</h1>
            <div className="video__info-wrapper">
                <div className="owner">
                    <h2 className="owner__channel">{props.mainVideo.channel}</h2>
                    <h5 className="owner__timestamp">{props.convertTime(props.mainVideo.timestamp)}</h5>
                </div>
                <div className="video__stats">
                    <div className="views">
                        <img className="views__icon" src={Views} alt=""/>
                        <span className="views__total">{props.mainVideo.views}</span>
                    </div>
                    <div className="likes">
                        <img className="likes__icon" src={Likes} alt=""/>
                        <span className="likes__total">{props.mainVideo.likes}</span>
                    </div>
                </div>
            </div>
            <p className="video__description">
                {props.mainVideo.description}
            </p>
        </article>
    )
};

export default Article;