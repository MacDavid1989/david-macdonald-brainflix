import Play from '../../assets/icons/svg/icon-play.svg';
// import Pause from '../../assets/icons/svg/icon-pause.svg';
// import Scrubber from '../../assets/icons/svg/icon-scrubber-control.svg';
import FullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import Volume from '../../assets/icons/svg/icon-volume.svg';

function Hero(props) {
    return (
        <section className="hero">
            <div>
                <video currenttime="true" duration="true" poster={props.mainVideo.image} width={50} height={50}>
                    <source src={props.mainVideo.video} type="video/mp4"/>
                    <p>Your browser doesn't support HTML5 video.</p> 
                </video>
                <div>
                    <button type="button" id="playPause"><img src={Play} alt=""/></button>
                    <input type="range" id="scrubber" value="0"/>
                    <div>
                        <button type="button" id="fullScreen"><img src={FullScreen} alt=""/></button>
                        <button type="button" id="volume"><img src={Volume} alt=""/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;