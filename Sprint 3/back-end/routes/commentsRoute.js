const express = require('express');
const router = express.Router();
const fs = require('fs')
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');
const commentIdRoute = require('./commentIdRoute')

router.use('/:commentId', (req, res, next) => {req.comment = {videoId: req.videoInfo.videoId, commentId: req.params.commentId}; next()}, commentIdRoute)

router.post('/', (req, res) => {
    const newComment = {
        "name": "This guy",
        "comment": req.body.comment,
        "likes" : 0,
        "id": createId(),
        "timestamp": Date.now()
    }

    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)

    parsedData.find(video => video.id === req.videoInfo.videoId).comments.unshift(newComment)
    
    fs.writeFile('mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log(err))

    res.json(newComment);
})

module.exports = router