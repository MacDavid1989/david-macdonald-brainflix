import Image0 from '../../assets/images/video-list-0.jpg';
import Play from '../../assets/icons/svg/icon-play.svg';
import FullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import Volume from '../../assets/icons/svg/icon-volume.svg';


function Hero() {
    return (
        <section className="hero">
            <video poster={Image0} width={50} height={50}></video>
            <div>
                <img src={Play}/>
                <progress></progress>
                <div>
                    <img src={FullScreen}/>
                    <img src={Volume}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;