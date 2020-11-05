import Play from '../../assets/icons/svg/icon-play.svg';
// import Pause from '../../assets/icons/svg/icon-pause.svg';
// import Scrubber from '../../assets/icons/svg/icon-scrubber-control.svg';
import FullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import Volume from '../../assets/icons/svg/icon-volume.svg';

function Player(props) {
    return (
        <section className="player">
            <div className="player__wrapper">
                <video className="player__video" currenttime="true" duration="true" poster={props.mainVideo.image} width={50} height={50}>
                    <source className="player__video-source" src={props.mainVideo.video} type="video/mp4"/>
                    <p className="player__video-text">Your browser doesn't support HTML5 video.</p> 
                </video>
                <div className="player__controls">
                    <button className="button__play"><img className="button__play-icon" src={Play} alt=""/></button>
                    <button className="button__scrubber">
                        <input type="range" id="scrubber" value="0" readOnly/>
                    </button>
                    <button className="button__fullscreenVolume">
                        <img className="button__fullscreen-icon" src={FullScreen} alt=""/>
                        <img className="button__volume-icon" src={Volume} alt=""/>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Player;