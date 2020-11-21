import './VideoPlayer.scss';
import React, {Component} from 'react'
import play from '../../assets/icons/svg/icon-play.svg';
import pause from '../../assets/icons/svg/icon-pause.svg';
// import scrubber from '../../assets/icons/svg/icon-scrubber-control.svg';
import fullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import volume from '../../assets/icons/svg/icon-volume.svg';

// video player component
class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.video = React.createRef();
        this.playbackPlay = React.createRef();
        this.playbackPause = React.createRef();
        this.elapsed = React.createRef();
        this.duration = React.createRef();
        this.progress = React.createRef();
        this.seek = React.createRef();
        this.fullscreen = React.createRef();
        this.videoContainer = React.createRef();
        this.player = React.createRef();
        this.volume = React.createRef();
    }

    togglePlay = () => {
        const video = this.video.current
        if (video.paused || video.ended) {
            this.updatePlayButton()
            return video.play();
        } else {
            this.updatePlayButton()
            return video.pause();
        }
    }

    updatePlayButton = () =>{
        const playbackPlay = this.playbackPlay.current;
        const playbackPause = this.playbackPause.current;
        playbackPlay.classList.toggle('hidden')
        playbackPause.classList.toggle('hidden')
    }

   formatTime = (timeInSeconds) => {
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
      
        return {
          minutes: result.substr(3, 2),
          seconds: result.substr(6, 2),
        };
      };

    updateTimeElapsed= () => {
        const video = this.video.current
        const timeElapsed = this.elapsed.current
        const time = this.formatTime(Math.round(video.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
        timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
    }

    initializedVideo = () => {
        const videoDuration = Math.round(this.video.current.duration);
        this.progress.current.setAttribute('max', videoDuration);
        this.seek.current.setAttribute('max', videoDuration);
    }

    updateProgress =() => {
        this.progress.current.value = Math.floor(this.video.current.currentTime);
        this.seek.current.value = Math.floor(this.video.current.currentTime);
    }

    toggleFullScreen =() => {
        if (document.fullscreenElement) {
            this.video.current.classList.toggle('video__alt')
            document.exitFullscreen();
            this.video.current.pause()
        } else {
            this.video.current.classList.toggle('video__alt')
            this.videoContainer.current.requestFullscreen();
            this.video.current.pause()
        }
    }

    // updateVolume = () => {
    //     const video = this.video.current
    //     if (video.muted) {
    //       video.muted = false;
    //     }
    //     video.muted = true;
    // }

    toggleMute = () => {
        const video = this.video.current
        video.muted = !video.muted;
      
        // if (video.muted) {
        //   volume.setAttribute('data-volume', volume.value);
        //   volume.value = 0;
        // } else {
        //   volume.value = volume.dataset.volume;
        // }
    }

    skipAhead = () => {
        const skipTo = this.seek.current.dataset.seek ? this.seek.current.dataset.seek : this.seek.current.value;
        this.video.current.currentTime = skipTo;
        this.progress.current.value = skipTo;
        this.seek.current.value = skipTo;
      }

    render() {
        return (
            // wrapper for video player
            <header className="header">
                {/* video player */}
                <section  className="player">
                    <div  ref={this.videoContainer}  className="player_container">
                        {/* video source and text if unsupported */}
                        <video onLoadedMetadata={this.initializedVideo} onTimeUpdate={()=>{this.updateTimeElapsed(); this.updateProgress()}} ref={this.video} className="video" id="video" preload="metadata" poster={this.props.mainVideo.image}>
                            <source src={this.props.mainVideo.video} type="video/mp4"></source>
                            <p className="video__text">Your browser doesn't support HTML5 video.</p>
                        </video>
                        {/* left video controls */}
                        <div className="controls">
                            <button className="button play" onClick={this.togglePlay}>
                                <img ref={this.playbackPlay} className="play__icon" src={play} alt="play button"/>
                                <img ref={this.playbackPause} className="pause__icon hidden" src={pause} alt="pause button"/>
                            </button>
                            {/* video progress bar and time */}
                            <div className="progress">
                                <progress ref={this.progress} className="progress__bar" value="0" min="0"></progress>
                                <input ref={this.seek} onChange={this.skipAhead} className="seek" id="seek" value="0" min="0" type="range" step="1"/>
                                <div className="time">
                                    <time ref={this.elapsed} className="time__elapsed">0:00</time>
                                    <span className="time__separation">/</span>
                                    <time ref={this.duration} className="time__total">{this.props.mainVideo.duration}</time>
                                </div>
                            </div>
                            {/* right video controls */}
                            <div className="controls__right">
                                <button ref={this.fullscreen} onClick={this.toggleFullScreen} className="button fullscreen">
                                    <img className="fullscreen__icon" src={fullScreen} alt="fullscreen button"/>
                                </button>
                                <button ref={this.volume} onClick={this.toggleMute} className="button volume">
                                    <img className="volume__icon" src={volume} alt="volume control"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
};

export default VideoPlayer;