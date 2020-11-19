const fs = require('fs')
const express = require('express');
const router = express.Router();
const videoListFile = './videoList.json';
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');
const commentsRoute = require('./commentsRoute')

router.use('/comments', (req, res, next) => {req.videoInfo; next()}, commentsRoute)

router.get('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    const mainVideo = parsedData.find(video => video.id === req.videoInfo.videoId)
    res.json(mainVideo);
})

router.put('/:videoId/likes', (req, res) => {
    mainVideos.find(video => video.id === req.params.videoId).likes++

    // fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

    res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId)));
})

module.exports = router