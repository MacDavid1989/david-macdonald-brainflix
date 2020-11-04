import sideVideo from './sideVideos'
import SampleVideo from '../assets/video/brainstation-sample-video.mp4'

//Main Video Object
const mainVideo = {
    id: sideVideo.find(video => video.id==='1').id,
    title: sideVideo.find(video => video.id==='1').title,
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: sideVideo.find(video => video.id==='1').channel,
    image: sideVideo.find(video => video.id==='1').image,
    views: '1,001,023',
    likes: '110,985',
    duration: 'type of <string>',
    video: SampleVideo,
    timestamp: '12/18/2018',
    comments: 'type of <array>' 
};

export default mainVideo;