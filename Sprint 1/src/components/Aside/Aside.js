function Aside(props) {
    return (
        <aside className="next-video">
            <h3 className="next-video__title">NEXT VIDEO</h3>
        {props.videoList.filter(video => video.id!=='1').map((video) =>
            <div className="next-video__cards" key={video.id}>
                <img className="card__image-next" src={video.image} alt="" height={50} width={50}/>
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