const fs = require('fs')
const express = require('express');
const router = express.Router();
const videoListFile = './videoList.json';
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');


router.post('/', (req, res) => {
    const newComment = {
        "name": "This guy",
        "comment": req.body.comment,
        "likes" : 0,
        "id": createId(),
        "timestamp": Date.now()
    }

    console.log(req.videoInfo, req.body)

    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    parsedData.find(video => video.id === req.videoInfo.videoId).comments.unshift(newComment)
    
    fs.writeFile('mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log(err))

    res.json(newComment);
})

router.delete('/:commentId', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)

    const index = parsedData.find(video => video.id === req.videoInfo.videoId).comments.indexOf(
        parsedData.find(video => video.id === req.videoInfo.videoId).comments
        .find(comment => comment.id === req.params.commentId)
    )

    console.log(index)

    const deletedComment = parsedData.find(video => video.id === req.videoInfo.videoId).comments.splice(index,1)

    fs.writeFile('mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log(err))

    return res.json(deletedComment);
})

router.put('/:commentId/likes', (req, res) => {
    mainVideos.find(video => video.id === req.params.videoId).comments
    .find(comment => comment.id === req.params.commentId).likes++

    // fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

    res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId).comments
    .find(comment => comment.id === req.params.commentId)));
})

module.exports = router