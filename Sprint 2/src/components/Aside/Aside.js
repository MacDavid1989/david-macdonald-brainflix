import './Aside.scss'
import NextVideo from '../NextVideo/NextVideo'

// aisde component to separate next video list from main body
function Aside({videoList}) {
    return (
        <aside className="next-video">
            <h3 className="next-video__title">NEXT VIDEO</h3>
            <NextVideo videoList={videoList}/>
        </aside>
    )
};

export default Aside;