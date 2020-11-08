import './Aside.scss'

function Aside({videoList}) {
    return (
        <aside className="next-video">
            <h3 className="next-video__title">NEXT VIDEO</h3>
        {videoList.filter(video => video.id!=='1').map((video) =>
            <div className="next-video__cards" key={video.id}>
                <img className="card__image-next" src={video.image} alt=""/>
                <div className="card__info-next">
                    <span className="card__title-next">{video.title}</span>
                    <span className="card__channel-next">{video.channel}</span>
                </div>
            </div>
        )}
        </aside>
    )
};

export default Aside;