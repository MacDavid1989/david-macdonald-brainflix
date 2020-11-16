import './NextVideo.scss'
import {Link} from 'react-router-dom'

// next video component display remaining videos thumbnail details
function NextVideo({video}) {
    return (
        <>
            {/* creats a video thumbnail wrapped in a route link to direct 
            the browser to the route with a path matching the video id */}
            <Link to={`/${video.id}`} className="next-video__card" id={video.id} key={video.id}>
                    <img className="card__image-next" src={video.image} alt="next video thumbnail"/>
                    <div className="card__info-next">
                        <p className="card__title-next">{video.title}</p>
                        <p className="card__channel-next">{video.channel}</p>
                    </div>
            </Link>
        </>
    )
};

export default NextVideo;