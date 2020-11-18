const fs = require('fs')
const express = require('express');
const router = express.Router();
const videoListFile = './videoList.json';
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');


router.post('/:videoId/comments', (req, res) => {
    const newComment = {
        "name": "This guy",
        "comment": req.body.comment,
        "likes" : 0,
        "id": createId(),
        "timestamp": Date.now()
    }

    mainVideos.find(video => video.id === req.params.videoId).comments.unshift(newComment)
    
    fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

    res.send(JSON.stringify(newComment));
})

router.delete('/:videoId/comments/:commentId', (req, res) => {
    const index = mainVideos.find(video => video.id === req.params.videoId).comments.indexOf(
        mainVideos.find(video => video.id === req.params.videoId).comments
        .find(comment => comment.id === req.params.commentId)
    )

    if(index >= 0){
        const deletedComment = mainVideos.find(video => video.id === req.params.videoId).comments.splice(index,1)

        fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

        return res.send(JSON.stringify(deletedComment));
    } else {
        return res.status(404).send(`Comment with an id of ${req.params.commentId} was not found`);
    }
})

router.put('/:videoId/comments/:commentId/likes', (req, res) => {
    mainVideos.find(video => video.id === req.params.videoId).comments
    .find(comment => comment.id === req.params.commentId).likes++

    fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

    res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId).comments
    .find(comment => comment.id === req.params.commentId)));
})