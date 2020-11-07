import './Article.scss';
import likes from '../../assets/icons/svg/icon-likes.svg';
import views from '../../assets/icons/svg/icon-views.svg';

function Article(props) {
    return (
        <article className="video-article">
            <h1 className="video-article__title">{props.mainVideo.title}</h1>
            <div className="video-article__info">
                <div className="owner">
                    <span className="owner__channel">{props.mainVideo.channel}</span>
                    <span className="owner__timestamp">{props.convertTime(props.mainVideo.timestamp)}</span>
                </div>
                <div className="video-article__stats">
                    <div className="views">
                        <img className="views__icon" src={views} alt=""/>
                        <span className="views__total">{props.mainVideo.views}</span>
                    </div>
                    <div className="likes">
                        <img className="likes__icon" src={likes} alt=""/>
                        <span className="likes__total">{props.mainVideo.likes}</span>
                    </div>
                </div>
            </div>
            <p className="video-article__description">{props.mainVideo.description}</p>
        </article>
    )
};

export default Article;