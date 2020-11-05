function Aside(props) {
    return (
        <aside className="next-videos">
            <h3 className="next-videos__title">NEXT VIDEO</h3>
            {props.videoList.filter(video => video.id!=='1').map((video) =>
                <div className="next-videos__card" key={video.id}>
                    <img className="card__image-alt" src={video.image} alt="" height={50} width={50}/>
                    <div className="card__description">
                        <h4 className="card__title">{video.title}</h4>
                        <h5 className="card__channel">{video.channel}</h5>
                    </div>
                </div>
            )}
        </aside>
    )
};

export default Aside;