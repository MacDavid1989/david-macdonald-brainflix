const fs = require('fs')
const express = require('express');
const router = express.Router();
const mainVideosFile = './data/mainVideos.json';
// PUT /videos/:videoId/comments/:commentId/likes || /videos/:videoId/likes
router.put('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    // checks if the comment key is undefined 
    if(req.comment===undefined){
        // since the videos route does not create the comment key for the req object it will be undefined and cause the following code to run
        parsedData.find(video => video.id === req.videoInfo.videoId).likes++
        // overwrite mainVideos.json to update with the video like
        fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log('this is the error :', err))

        return res.send('Video like updated')
    }
    else {
        // only one other condition exists in which case if the above is not met the following code will run
        const commentsArray = parsedData.find(video => video.id === req.comment.videoId).comments
        // increments the likes of the comment matching the commentId
        commentsArray.find(comment => comment.id === req.comment.commentId).likes++
        // overwrite mainVideos.json to update with the comment like
        fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log('this is the error :', err))

        return res.send('Comment like updated')
    }
})

module.exports = router