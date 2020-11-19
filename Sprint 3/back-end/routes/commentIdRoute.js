const fs = require('fs')
const express = require('express');
const router = express.Router();
const mainVideosFile = './data/mainVideos.json';
const likesRoute = require('./likesRoute')
// likes route
router.use('/likes', likesRoute)
// DELETE /videos/:videoId/comments/:commentId
router.delete('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    // locates the comments array of the video based on videoId
    const commentsArray = parsedData.find(video => video.id === req.comment.videoId).comments
    // sets the index of the comment based on commentId
    const index = commentsArray.indexOf(commentsArray.find(comment => comment.id === req.comment.commentId))
    // removes the comment at the specified index and sets it to the variable
    const deletedComment = parsedData.find(video => video.id === req.comment.videoId).comments.splice(index,1)
    // overwrite mainVideos.json to update with the comment removed
    fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log(err))

    return res.status(200).json(deletedComment);
})


module.exports = router