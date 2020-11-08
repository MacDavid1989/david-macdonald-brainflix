import NextVideo from '../NextVideo/NextVideo'
import './Aside.scss'

function Aside({videoList}) {
    return (
        <aside className="next-video">
            <h3 className="next-video__title">NEXT VIDEO</h3>
            <NextVideo videoList={videoList}/>
        </aside>
    )
};

export default Aside;