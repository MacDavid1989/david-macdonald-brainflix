import './Article.scss';
import likes from '../../assets/icons/svg/icon-likes.svg';
import views from '../../assets/icons/svg/icon-views.svg';

function Article({mainVideo, onVideoLike, convertTime}) {
    // like handler which calls the handler passed from Home component and passes it the comment id as an argument
    const handleVideoLike = (onVideoLike) => {
        onVideoLike()
    };

    const numFormat = (string) => {
        string += '';
        let x = string.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    return (
        // wrapper for all information associated with current main video stored in state
        <article className="video-article">
            {/* video title */}
            <h1 className="video-article__title">{mainVideo.title}</h1>
            <div className="video-article__info">
                {/* video owner information including timestamp and channel */}
                <div className="owner">
                    <span className="owner__channel">{mainVideo.channel}</span>
                    <span className="owner__timestamp">{convertTime(mainVideo.timestamp)}</span>
                </div>
                {/* video like and views wrapper */}
                <div className="video-article__stats">
                    <div className="views">
                        <img className="views__icon" src={views} alt=""/>
                        <span className="views__total">{numFormat(String(mainVideo.views))}</span>
                    </div>
                    <div onClick={(e)=> handleVideoLike(onVideoLike)} className="likes">
                        <img className="likes__icon" src={likes} alt=""/>
                        <span className="likes__total">{numFormat(String(mainVideo.likes))}</span>
                    </div>
                </div>
            </div>
            <p className="video-article__description">{mainVideo.description}</p>
        </article>
    );
};

export default Article;