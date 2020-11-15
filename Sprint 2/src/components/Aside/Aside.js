import './Aside.scss'
import NextVideo from '../NextVideo/NextVideo'

// aisde component to separate next video list from main body
function Aside({videoList}) {
    return (
        <aside className="next-video">
            <h3 className="next-video__title">NEXT VIDEO</h3>
            {/* maps the video list array 
            and renders a next video component for each object in the array */}
        {videoList.map((video) =>
            <NextVideo key={video.id} video={video}/>
        )}
        </aside>
    )
};

export default Aside;