const express = require('express');
const router = express.Router();
const fs = require('fs')
const commentsRoute = require('./commentsRoute')
const mainVideosFile = './data/mainVideos.json';
const likesRoute = require('./likesRoute')
// likes route
router.use('/likes', likesRoute)
// comments route
router.use('/comments', commentsRoute)
// GET /videos/:videoId
router.get('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    // sets the variable to the video returned from the find method using the id passed in the newly created videoInfo property in the videos route
    const mainVideo = parsedData.find(video => video.id === req.videoInfo.videoId)
    
    res.json(mainVideo);
})

module.exports = router