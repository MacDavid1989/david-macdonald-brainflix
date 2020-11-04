import Play from '../../assets/icons/svg/icon-play.svg';
import FullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import Volume from '../../assets/icons/svg/icon-volume.svg';

function Hero(props) {
    return (
        <section className="hero">
            <video src={props.mainVideo.video} poster={props.mainVideo.image} width={50} height={50}></video>
            <div>
                <img src={Play} alt=""/>
                <progress></progress>
                <div>
                    <img src={FullScreen} alt=""/>
                    <img src={Volume} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;