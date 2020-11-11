import './NextVideo.scss'

function NextVideo({videoList}) {
    return (
        <>
        {videoList.filter(video => video.id!=='1').map((video) =>
            <div className="next-video__card" key={video.id}>
                <img className="card__image-next" src={video.image} alt=""/>
                <div className="card__info-next">
                    <span className="card__title-next">{video.title}</span>
                    <span className="card__channel-next">{video.channel}</span>
                </div>
            </div>
        )}
        </>
    )
};

export default NextVideo;