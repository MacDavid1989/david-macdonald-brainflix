import './NextVideo.scss'
import {Link} from 'react-router-dom'

// 
function NextVideo({video}) {
    return (
        <>
            <Link to={`/${video.id}`} className="next-video__card" id={video.id} key={video.id}>
                    <img className="card__image-next" src={video.image} alt=""/>
                    <div className="card__info-next">
                        <p className="card__title-next">{video.title}</p>
                        <p className="card__channel-next">{video.channel}</p>
                    </div>
            </Link>
        </>
    )
};

export default NextVideo;