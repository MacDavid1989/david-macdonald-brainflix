const express = require('express');
const router = express.Router();
const fs = require('fs')
const commentsRoute = require('./commentsRoute')
const mainVideosFile = './data/mainVideos.json';
const likesRoute = require('./likesRoute')

router.use('/likes', likesRoute)
router.use('/comments', commentsRoute)

router.get('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)

    const mainVideo = parsedData.find(video => video.id === req.videoInfo.videoId)
    
    res.json(mainVideo);
})

module.exports = router