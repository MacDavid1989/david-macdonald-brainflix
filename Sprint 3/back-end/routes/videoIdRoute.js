const fs = require('fs')
const express = require('express');
const router = express.Router();
const videoListFile = './videoList.json';
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');
const commentsRoute = require('./commentsRoute')

router.use('/comments', commentsRoute)

router.get('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    const mainVideo = parsedData.find(video => video.id === req.videoInfo.videoId)
    res.json(mainVideo);
})

module.exports = router