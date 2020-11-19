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
    const index = mainVideos.find(video => video.id === req.params.videoId).comments.indexOf(
        mainVideos.find(video => video.id === req.params.videoId).comments
        .find(comment => comment.id === req.params.commentId)
    )

    if(index >= 0){
        const deletedComment = mainVideos.find(video => video.id === req.params.videoId).comments.splice(index,1)

        // fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

        return res.send(JSON.stringify(deletedComment));
    } else {
        return res.status(404).send(`Comment with an id of ${req.params.commentId} was not found`);
    }
})

router.put('/:commentId/likes', (req, res) => {
    mainVideos.find(video => video.id === req.params.videoId).comments
    .find(comment => comment.id === req.params.commentId).likes++

    // fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

    res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId).comments
    .find(comment => comment.id === req.params.commentId)));
})

module.exports = router