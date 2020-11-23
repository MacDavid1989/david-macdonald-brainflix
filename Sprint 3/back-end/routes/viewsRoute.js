const fs = require('fs')
const express = require('express');
const router = express.Router();
const mainVideosFile = './data/mainVideos.json';

// PUT /videos/:videoId/views
router.put('/', (req, res) => {
    const data = fs.readFileSync(mainVideosFile)
    const parsedData = JSON.parse(data)
    // increment the views of the video that matches the id passed in the put request
    parsedData.find(video => video.id === req.videoInfo.videoId).views++
    // overwrite mainVideos.json to update with the video like
    fs.writeFile('./data/mainVideos.json', JSON.stringify([...parsedData]), (err) => console.log('this is the error :', err))

    return res.status(200).send('Video views updated')
})

module.exports = router