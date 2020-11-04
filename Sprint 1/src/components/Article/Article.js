import Likes from '../../assets/icons/svg/icon-likes.svg';
import Views from '../../assets/icons/svg/icon-views.svg';
import {mainVideo, sideVideos} from '../../utils/Data'
import textEllipsis from 'text-ellipsis'

function Article() {
    return (
        <article>
            <h1>{mainVideo.title}</h1>
            <div>
                <div>
                    <h2>{mainVideo.channel}</h2>
                    <h5>{mainVideo.timestamp}</h5>
                </div>
                <div>
                    <div>
                        <img src={Views} alt=""/>
                        <span>{mainVideo.views}</span>
                    </div>
                    <div>
                        <img src={Likes} alt=""/>
                        <span>{mainVideo.likes}</span>
                    </div>
                </div>
            </div>
            <p>
                {textEllipsis(mainVideo.description)}
            </p>
        </article>
    )
}

export default Article;