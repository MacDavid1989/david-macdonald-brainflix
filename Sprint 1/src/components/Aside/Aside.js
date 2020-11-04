import {mainVideo, sideVideos} from '../../utils/Data'

function Aside() {
    return (
        <aside>
            <h3>NEXT VIDEO</h3>
            {sideVideos.filter(video => video.id!=='1').map((video) =>
                <div key={video.id}>
                    <img src={video.image} alt="" height={50} width={50}/>
                    <div>
                        <h4>{video.title}</h4>
                        <h5>{video.channel}</h5>
                    </div>
                </div>
            )}
        </aside>
    )
}

export default Aside;