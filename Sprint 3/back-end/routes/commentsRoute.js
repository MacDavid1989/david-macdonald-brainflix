const express = require('express');
const router = express.Router();
const fs = require('fs')
const mainVideosFile = './data/mainVideos.json';
const createId = require('uniqid');
const commentIdRoute = require('./commentIdRoute')
// :commentId route with a new req property declared which allows route methods to access those values
router.use('/:commentId', (req, res, next) => {req.comment = {videoId: req.videoInfo.videoId, commentId: req.params.commentId}; next()}, commentIdRoute)
// POST /videos/:videoId/comments
router.post('/', (req, res) => {
    // create new comment object from request body data
    const newComment = {
        "name": req.body.name,
        "comment": req.body.comment,
        "likes" : 0,
        "id": createId(),
        "timestamp": Date.now()
    }

    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    // adds the new comment object to the array of comments for the video with the corresponding videoId
    parsedData.find(video => video.id === req.videoInfo.videoId).comments.unshift(newComment)
    // overwrite mainVideos.json to update with the new comment
    fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log(err))

    res.status(201).json(newComment);
})

module.exports = router