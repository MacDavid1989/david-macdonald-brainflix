const express = require('express');
const router = express.Router();
const fs = require('fs')
const createId = require('uniqid');
const videoIdRoute = require('./videoIdRoute')
const videoListFile = './data/videoList.json';
const mainVideosFile = './data/mainVideos.json';

router.use('/:videoId', (req, res, next) => {req.videoInfo = {videoId: req.params.videoId}; next()},videoIdRoute)

router.get('/', (req, res) => {
    const videoList = fs.readFileSync(videoListFile)
    const parsedVideoList = JSON.parse(videoList)
    res.json(parsedVideoList);
})

router.post('/', (req, res) => {
    const newVideo = {
        "id": createId(),
        "title": req.body.title,
        "channel": "This Guy",
        "image": "http://localhost:8080/images/upload-video-preview.jpg",
        "description": req.body.description,
        "views": 0,
        "likes": 0,
        "duration": "0:20",
        "video": "https://project-2-api.herokuapp.com/stream?api_key=b7ee58b2-ad0f-4818-b9ff-f808ade2133d",
        "timestamp": Date.now(),
        "comments": []
    }

    const newVideoThumb = {
        "id": newVideo.id,
        "title": newVideo.title,
        "channel": newVideo.channel,
        "image": newVideo.image
    }

    const mainVideo = fs.readFileSync(mainVideosFile)
    const parsedMainVideo = JSON.parse(mainVideo)

    fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedMainVideo, newVideo]), (err) => console.log(err))

    const videoList = fs.readFileSync(videoListFile)
    const parsedVideoList = JSON.parse(videoList)

    fs.writeFile('./data/videoList.json', JSON.stringify([...parsedVideoList, newVideoThumb]), (err) => console.log(err))
    
    res.json(newVideo);
});

module.exports = router