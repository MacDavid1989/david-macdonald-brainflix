const fs = require('fs')
const express = require('express');
const router = express.Router();
const videoListFile = './videoList.json';
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');
const videoIdRoute = require('./videoIdRoute')

router.use('/:videoId', (req, res, next) => {req.videoInfo = {videoId: req.params.videoId}; next()},videoIdRoute)

router.get('/', (req, res) => {
    const data = fs.readFileSync(videoListFile)
    const parsedData = JSON.parse(data)
    res.json(parsedData);
})

router.post('/', (req, res) => {
    const newVideo = {
        "id": createId(),
        "title": req.body.title,
        "channel": "This Guy",
        "image": "https://i.imgur.com/kmPBr.jpg",
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

    const videoList = fs.readFileSync(videoListFile)
    const parsedVideoList = JSON.parse(videoList)

    fs.writeFile('videoList.json', JSON.stringify([...parsedVideoList, newVideoThumb]), (err) => console.log(err))
    
    fs.writeFile('mainVideos.json', JSON.stringify([...parsedMainVideo, newVideo]), (err) => console.log(err))
    
    res.json(newVideo);
});

module.exports = router