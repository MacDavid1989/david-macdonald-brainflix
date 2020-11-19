const fs = require('fs')
const express = require('express');
const router = express.Router();
const mainVideosFile = './data/mainVideos.json';

router.put('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)

    if(req.comment===undefined){
        console.log()
        parsedData.find(video => video.id === req.videoInfo.videoId).likes++

        fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log('this is the error :', err))

        return res.send('Video like updated')
    }
    else {
        parsedData.find(video => video.id === req.comment.videoId).comments.find(comment => comment.id === req.comment.commentId).likes++

        fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log('this is the error :', err))

        return res.send('Comment like updated')
    }
})

module.exports = router