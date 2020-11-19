const fs = require('fs')
const express = require('express');
const router = express.Router();
const mainVideosFile = './data/mainVideos.json';
const likesRoute = require('./likesRoute')

router.use('/likes', likesRoute)

router.delete('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)

    const index = parsedData.find(video => video.id === req.comment.videoId).comments.indexOf(
        parsedData.find(video => video.id === req.comment.videoId).comments
        .find(comment => comment.id === req.comment.commentId)
    )

    console.log(index)

    const deletedComment = parsedData.find(video => video.id === req.comment.videoId).comments.splice(index,1)

    fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log(err))

    return res.json(deletedComment);
})


module.exports = router