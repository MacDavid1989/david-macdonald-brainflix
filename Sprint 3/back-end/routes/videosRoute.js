const express = require('express');
const router = express.Router();
const fs = require('fs')
const createId = require('uniqid');
const videoIdRoute = require('./videoIdRoute')
const videoListFile = './data/videoList.json';
const mainVideosFile = './data/mainVideos.json';

// :videoId route with a new req property declared which allows route methods to access those values
router.use('/:videoId', (req, res, next) => {req.videoInfo = {videoId: req.params.videoId}; next()}, videoIdRoute)
// GET /videos/
router.get('/', (req, res) => {
    const videoList = fs.readFileSync(videoListFile)
    const parsedVideoList = JSON.parse(videoList)
    res.json(parsedVideoList);
})
// POST /videos/
router.post('/', (req, res) => {
    // create new video object with full details to add to main videos list
    const newVideo = {
        "id": createId(),
        "title": req.body.title,
        "channel": "This Guy",
        "image": req.body.image,
        "description": req.body.description,
        "views": 0,
        "likes": 0,
        "duration": "0:20",
        "video": "http://localhost:8080/video/brainstation-sample-video.mp4",
        "timestamp": Date.now(),
        "comments": []
    }
    // create new video thumb for video list
    const newVideoThumb = {
        "id": newVideo.id,
        "title": newVideo.title,
        "channel": newVideo.channel,
        "image": newVideo.image
    }

    const mainVideo = fs.readFileSync(mainVideosFile)
    const parsedMainVideo = JSON.parse(mainVideo)
    // overwrite mainVideos.json to update with newVideo object
    fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedMainVideo, newVideo]), (err) => console.log(err))

    const videoList = fs.readFileSync(videoListFile)
    const parsedVideoList = JSON.parse(videoList)
    // overwrite videoList.json to update with newVideoThumb object
    fs.writeFile('./data/videoList.json', JSON.stringify([...parsedVideoList, newVideoThumb]), (err) => console.log(err))
    
    res.json(newVideo);
});

module.exports = router