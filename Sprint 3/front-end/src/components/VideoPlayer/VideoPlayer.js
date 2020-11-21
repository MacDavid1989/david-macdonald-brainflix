import './VideoPlayer.scss';
import React, {Component} from 'react'
import play from '../../assets/icons/svg/icon-play.svg';
// import pause from '../../assets/icons/svg/icon-pause.svg';
// import scrubber from '../../assets/icons/svg/icon-scrubber-control.svg';
import fullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import volume from '../../assets/icons/svg/icon-volume.svg';

// video player component
class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.video = React.createRef();
      }

      togglePlay = () => {
          const video = this.video.current
          if (video.paused || video.ended) {
            return video.play();
          } else {
            return video.pause();
          }
        }

    render() {
        return (
            // wrapper for video player
            <header className="header">
                {/* video player */}
                <section className="player">
                    {/* video source and text if unsupported */}
                    <video ref={this.video} className="video" id="video" preload="metadata" poster={this.props.mainVideo.image}>
                        <source src={this.props.mainVideo.video} type="video/mp4"></source>
                        <p className="video__text">Your browser doesn't support HTML5 video.</p> 
                    </video>
                    {/* left video controls */}
                    <div className="controls">
                        <button className="button play" onClick={this.togglePlay}>
                            <img className="play__icon" src={play} alt="play button"/>
                        </button>
                        {/* video progress bar and time */}
                        <div className="progress">
                            <progress className="progress__bar" max="100" value="0"></progress>
                            <div className="time">
                                <time className="time__elapsed">0:00</time>
                                <span className="time__separation">/</span>
                                <time className="time__total">{this.props.mainVideo.duration}</time>
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
        );
    }
};

export default VideoPlayer;