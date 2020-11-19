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

    // fs.writeFile('videoList.json', JSON.stringify([...parsedVideoList, newVideoThumb]), (err) => console.log(err))
    
    // fs.writeFile('mainVideos.json', JSON.stringify([...parsedMainVideo, newVideo]), (err) => console.log(err))
    
    res.json(newVideo);
});

// router.get('/:videoId', (req, res) => {
//     const data = fs.readFileSync(mainVideosFile)
//     const parsedData = JSON.parse(data)
//     const mainVideo = parsedData.find(video => video.id === req.params.videoId)
//     res.json(mainVideo);
// })

// router.put('/:videoId/likes', (req, res) => {
//     mainVideos.find(video => video.id === req.params.videoId).likes++

//     // fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//     res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId)));
// })

// router.post('/:videoId/comments', (req, res) => {
//     console.log(req.body)
//     const newComment = {
//         "name": "This guy",
//         "comment": req.body.comment,
//         "likes" : 0,
//         "id": createId(),
//         "timestamp": Date.now()
//     }

//     mainVideos.find(video => video.id === req.params.videoId).comments.unshift(newComment)
    
//     fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//     res.send(JSON.stringify(newComment));
// })

// router.delete('/:videoId/comments/:commentId', (req, res) => {
//     const index = mainVideos.find(video => video.id === req.params.videoId).comments.indexOf(
//         mainVideos.find(video => video.id === req.params.videoId).comments
//         .find(comment => comment.id === req.params.commentId)
//     )

//     if(index >= 0){
//         const deletedComment = mainVideos.find(video => video.id === req.params.videoId).comments.splice(index,1)

//         fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//         return res.send(JSON.stringify(deletedComment));
//     } else {
//         return res.status(404).send(`Comment with an id of ${req.params.commentId} was not found`);
//     }
// })

// router.put('/:videoId/comments/:commentId/likes', (req, res) => {
//     mainVideos.find(video => video.id === req.params.videoId).comments
//     .find(comment => comment.id === req.params.commentId).likes++

//     fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//     res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId).comments
//     .find(comment => comment.id === req.params.commentId)));
// })


module.exports = router