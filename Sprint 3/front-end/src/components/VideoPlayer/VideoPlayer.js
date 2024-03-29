import './VideoPlayer.scss';
import React, {Component} from 'react'
import axios from 'axios';
import {defaultVideoId} from '../../utils/defaultVideoId'
import formatTime from '../../utils/formatVideoTime';
import play from '../../assets/icons/svg/icon-play.svg';
import pause from '../../assets/icons/svg/icon-pause.svg';
import fullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import volume from '../../assets/icons/svg/icon-volume.svg';

const API_URL = process.env.REACT_APP_API_URL;

// video player component
class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        // video element
        this.video = React.createRef();
        // play button
        this.playbackPlay = React.createRef();
        // pause button
        this.playbackPause = React.createRef();
        // time elapsed element
        this.elapsed = React.createRef();
        // time duration element 
        this.duration = React.createRef();
        // progress bar element
        this.progress = React.createRef();
        // seek bar input element
        this.seek = React.createRef();
        // fullscreen button
        this.fullscreen = React.createRef();
        // div element wrapping video and controls
        this.videoContainer = React.createRef();
        // volume button
        this.volume = React.createRef();
        // volume slider
        this.slide = React.createRef();
        // video controls wrapper
        this.controls = React.createRef();
        // volume progress bar
        this.progressVolume = React.createRef();

        // event which fires when document enters or exits full screen
        document.addEventListener('fullscreenchange', e=>{
            // checks to see if document is out of fullscreen and if the video element className is 'video video__alt'
            if(!document.webkitIsFullScreen && e.srcElement.firstChild.className === 'video video__alt'){
                // sets the video element class to 'video' if the above is true
                e.srcElement.firstChild.className = 'video'
            }
        })
    }

    componentDidUpdate(prevProps) {

        if(this.props.params.id !== prevProps.params.id){
            // reloads the video source when changing pages
            this.video.current.load()
            // checks if the play button is hidden, toggles icon if true to display play button
            if(this.playbackPlay.current.classList.value === 'play__icon hidden'){
                this.playbackPlay.current.classList.toggle('hidden')
                this.playbackPause.current.classList.toggle('hidden')
            }
            // axios request to increment the views of the previous video when changing pages, the views will be increased by 1 on the next page revisit
            if(prevProps.params.id === undefined){
                axios.put(`${API_URL}/videos/${defaultVideoId}/views`)
                .then()
                .catch(error => console.error(error));
            } else {
                axios.put(`${API_URL}/videos/${prevProps.params.id}/views`)
                .then()
                .catch(error => console.error(error));
            };
        }    
    }

    // controls the video state of playing or paused
    togglePlay = () => {
        // checks if the video is paused or has finished playing
        if (this.video.current.paused || this.video.current.ended) {
            // calls function to toggle playback button state and then plays the video
            this.updatePlayButton()
            return this.video.current.play();
        } else {
            // calls function to toggle playback button state and then pauses the video
            this.updatePlayButton()
            return this.video.current.pause();
        }
    }

    // toggles the current icon visible in the playback button
    updatePlayButton = () => {
        this.playbackPlay.current.classList.toggle('hidden')
        this.playbackPause.current.classList.toggle('hidden')
    }

    // changes the inner text of the elapsed time element with the current time of the video media
    updateTimeElapsed = () => {
        const timeElapsed = this.elapsed.current
        // passes the rounded value of the video current time as an argument of the formatTime function which returns an object of min and sec
        const time = formatTime(Math.round(this.video.current.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    }

    // sets max attribute to the value of the video media duration
    initializedVideo = () => {
        // rounds the value of the video media duration to a whole number
        const videoDuration = Math.round(this.video.current.duration);
        // sets the max attribute of both the seek input and progress bar to equal videoDuration
        this.progress.current.setAttribute('max', videoDuration);
        this.seek.current.setAttribute('max', videoDuration);
        // sets the seek value to 0 which allows slider thumb to visibly start at the beginning of the progress bar
        this.seek.current.value = 0;
    }

    // sets the value of the seek input and progress bar to the lower rounded value of the video media element current time on playback
    updateProgress = () => {
        this.progress.current.value = Math.floor(this.video.current.currentTime);
        this.seek.current.value = Math.floor(this.video.current.currentTime);
    }

    // controls the fullscreen state of the video player
    toggleFullScreen = () => {
        // checks if there is an element currently in fullscreen
        if (document.fullscreenElement) {
            // method which requests the element currently in fullscreen be taken out of fullscreen
            document.exitFullscreen();
            this.video.current.classList.toggle('video__alt')
        } else {
            // requests that the element is placed in fullscreen
            this.videoContainer.current.requestFullscreen();
            this.video.current.classList.toggle('video__alt')
        }
    }

    // sets the video media volume and progress volume bar value to the value of the volume input slider 
    updateVolume = () => {
        if (this.video.current.muted) {
            this.video.current.muted = false;
        }
        this.video.current.volume = this.slide.current.value;
        this.progressVolume.current.value = this.slide.current.value;
    }

    // sets the muted boolean to be the opposite value when called
    toggleMute = () => {
        this.video.current.muted = !this.video.current.muted;
      
        // checks if video volume is muted
        if (this.video.current.muted) {
            // sets the dataset volume value to the current position on the slider range input
            this.slide.current.setAttribute('data-volume', this.slide.current.value);
            // sets the value of the slide to 0 to match mute condition
            this.slide.current.value = 0;
            // sets progress bar value to match slider
            this.progressVolume.current.value = this.slide.current.value;
        } else {
            // sets the slider value to the previously stored dataset volume value upon un-muting video
            this.slide.current.value = this.slide.current.dataset.volume;
            // sets progress bar value to match slider
            this.progressVolume.current.value = this.slide.current.value;
        }
      }

    // sets the video time and progress bar value to match the seek input value 
    skipAhead = () => {
        const skipTo = this.seek.current.value;
        this.video.current.currentTime = skipTo;
        this.progress.current.value = skipTo;
    }

    // controls the visibility of the volume slider when clicking the volume control button
    toggleSlide = () => {
        this.slide.current.classList.toggle('hidden')
        this.progressVolume.current.classList.toggle('hidden')
    }

    // checks is the pause icon is hidden when the video plays and toggles it if true
    handleAutoPlay = () => {
        if(this.playbackPause.current.classList.value === 'pause__icon hidden'){
            this.playbackPlay.current.classList.toggle('hidden')
            this.playbackPause.current.classList.toggle('hidden')
        }
    }

    // reloads the video when the media has ended
    handleEndPlay = () => {
        this.video.current.load()
    // checks is the pause icon is visible when the video end and toggles it if true
        if(this.playbackPause.current.classList.value === 'pause__icon'){
            this.playbackPlay.current.classList.toggle('hidden')
            this.playbackPause.current.classList.toggle('hidden')
        }
    }

    // hides the video controls
    hideControls= () => {
        if (this.video.current.paused) {
          return;
        } 
        this.controls.current.classList.add('hidden');
    }
      
    // displays the video controls
    showControls = () => {
        this.controls.current.classList.remove('hidden');
    }

    render() {
        return (
            // wrapper for video player
            <header className="header">
                {/* video player */}
                <section className="player">
                    {/* Video and Controls container */}
                    <div ref={this.videoContainer} onMouseOver={this.showControls} onMouseLeave={this.hideControls} className="player_container">
                        {/* video source and text if unsupported */}
                        <video 
                            ref={this.video}
                            onMouseEnter={this.showControls} 
                            onMouseLeave={this.hideControls} 
                            onPlay={this.handleAutoPlay} 
                            onEnded={() => {this.handleEndPlay();if(document.fullscreenElement){this.toggleFullScreen()}}} 
                            onClick={this.togglePlay} 
                            onLoadedMetadata={this.initializedVideo} 
                            onTimeUpdate={()=>{this.updateTimeElapsed(); this.updateProgress()}}
                            className="video" 
                            id="video" 
                            preload="metadata" 
                            poster={this.props.mainVideo.image}
                        >
                            <source src={this.props.mainVideo.video} type="video/mp4"></source>
                            <p className="video__text">Your browser doesn't support HTML5 video.</p>
                        </video>
                        {/* left video controls */}
                        <div ref={this.controls} onMouseEnter={this.showControls} onMouseLeave={this.hideControls} className="controls">
                            {/* playback button */}
                            <button className="button play" onClick={this.togglePlay}>
                                {/* play icon */}
                                <img ref={this.playbackPlay} className="play__icon" src={play} alt="play button"/>
                                {/* pause icon */}
                                <img ref={this.playbackPause} className="pause__icon hidden" src={pause} alt="pause button"/>
                            </button>
                            {/* video progress bar and time */}
                            <div className="progress">
                                <progress ref={this.progress} className="progress__bar" min="0"></progress>
                                {/* seek bar overlay on progress bar */}
                                <input ref={this.seek} onChange={this.skipAhead} className="seek" id="seek" min="0" type="range" step="0.1"/>
                                {/* time container */}
                                <div className="time">
                                    <time ref={this.elapsed} className="time__elapsed">00:00</time>
                                    <span className="time__separation">/</span>
                                    <time ref={this.duration} className="time__total">{this.props.mainVideo.duration}</time>
                                </div>
                            </div>
                            {/* right video controls */}
                            <div  className="controls__right">
                                <button ref={this.fullscreen} onClick={this.toggleFullScreen} className="button fullscreen">
                                    <img className="fullscreen__icon" src={fullScreen} alt="fullscreen button"/>
                                </button>
                                <button ref={this.volume} onClick={this.toggleMute} onMouseEnter={this.toggleSlide} className="button volume">
                                    <img className="volume__icon" src={volume} alt="volume control"/>
                                </button>
                                <progress ref={this.progressVolume} value="1" className="volume__bar hidden" min="0"></progress>
                                {/* volume overlay */}
                                <input ref={this.slide} onMouseLeave={this.toggleSlide} onChange={this.updateVolume} className="volume__slide hidden" id="volumeSlide" type="range" max="1" min="0" step="0.01"/>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
};

export default VideoPlayer;