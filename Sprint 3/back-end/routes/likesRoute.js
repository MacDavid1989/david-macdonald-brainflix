const fs = require('fs')
const express = require('express');
const router = express.Router();
const videoListFile = './videoList.json';
const mainVideosFile = './mainVideos.json';
const createId = require('uniqid');

// router.put('/:videoId/likes', (req, res) => {
//     mainVideos.find(video => video.id === req.params.videoId).likes++

//     // fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//     res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId)));
// })

router.put('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)

    parsedData.find(video => video.id === req.comment.videoId).comments.find(comment => comment.id === req.comment.commentId).likes++

    fs.writeFile('mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log('this is the error :', err))

    res.send('Comment like updated')
})

module.exports = router