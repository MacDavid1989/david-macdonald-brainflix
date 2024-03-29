import './VideoPlayer.scss';
import play from '../../assets/icons/svg/icon-play.svg';
// import pause from '../../assets/icons/svg/icon-pause.svg';
// import scrubber from '../../assets/icons/svg/icon-scrubber-control.svg';
import fullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import volume from '../../assets/icons/svg/icon-volume.svg';
import {API_KEY} from '../../utils/apiKey'

// video player component
function VideoPlayer({mainVideo}) {
    return (
        // wrapper for video player
        <header className="header">
            {/* video player */}
            <section className="player">
                {/* video source and text if unsupported */}
                <video className="video" poster={mainVideo.image}>
                    <source className="video__source" src={mainVideo.video + `${API_KEY}`} type="video/mp4"/>
                    <p className="video__text">Your browser doesn't support HTML5 video.</p> 
                </video>
                {/* left video controls */}
                <div className="controls">
                    <button className="button play">
                        <img className="play__icon" src={play} alt="play button"/>
                    </button>
                    {/* video progress bar and time */}
                    <div className="progress">
                        <progress className="progress__bar" max="100" value="0"></progress>
                        <div className="time">
                            <time className="time__elapsed">0:00</time>
                            <span className="time__separation">/</span>
                            <time className="time__total">{mainVideo.duration}</time>
                        </div>
                    </div>
                    {/* right video controls */}
                    <div className="controls__right">
                        <button className="button fullscreen">
                            <img className="fullscreen__icon" src={fullScreen} alt="fullscreen button"/>
                        </button>
                        <button className="button volume">
                            <img className="volume__icon" src={volume} alt="volume control"/>
                        </button>
                    </div>
                </div>
            </section>
        </header>
    )
};

export default VideoPlayer;