import './VideoPlayer.scss';
import play from '../../assets/icons/svg/icon-play.svg';
// import pause from '../../assets/icons/svg/icon-pause.svg';
// import scrubber from '../../assets/icons/svg/icon-scrubber-control.svg';
import fullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import volume from '../../assets/icons/svg/icon-volume.svg';

function VideoPlayer(props) {
    return (
        <section className="player">
            <video className="video" poster={props.mainVideo.image} width={50} height={50}>
                <source className="video__source" src={props.mainVideo.video} type="video/mp4"/>
                <p className="video__text">Your browser doesn't support HTML5 video.</p> 
            </video>
            <div className="controls">
                <button className="button play">
                    <img className="play__icon" src={play} alt=""/>
                </button>
                <div className="progress">
                    <progress className="progress__bar" max="100" value="0"></progress>
                    <div className="time">
                        <time className="time__elapsed">0:00</time>
                        <span className="time__separation">/</span>
                        <time className="time__total">0:42</time>
                    </div>
                </div>
                <div className="controls__right">
                    <button className="button fullscreen">
                        <img className="fullscreen__icon" src={fullScreen} alt=""/>
                    </button>
                    <button className="button volume">
                        <img className="volume__icon" src={volume} alt=""/>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default VideoPlayer;