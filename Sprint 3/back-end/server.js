const express = require('express');
const createId = require('uniqid');
const fs = require('fs');
const cors = require('cors');
const app = express();
const videoList = require('./videoList.json');
const mainVideos = require('./mainVideos.json');
app.use(cors())
app.use(express.json())
const videosRoute = require('./routes/videosRoute')
const commentsRoute = require('./routes/videosRoute')

app.use('/videos', videosRoute)
app.use('/videos/:videoId/comments', videosRoute)


// app.get('/videos', (req, res) => {
//     res.send(videoList);
// })

// app.post('/videos', (req, res) => {
//     const newVideo = {
//         "id": createId(),
//         "title": req.body.title,
//         "channel": "This Guy",
//         "image": "https://i.imgur.com/kmPBr.jpg",
//         "description": req.body.description,
//         "views": 0,
//         "likes": 0,
//         "duration": "0:20",
//         "video": "https://project-2-api.herokuapp.com/stream?api_key=b7ee58b2-ad0f-4818-b9ff-f808ade2133d",
//         "timestamp": Date.now(),
//         "comments": []
//     }

//     const newVideoThumb = {
//         "id": newVideo.id,
//         "title": newVideo.title,
//         "channel": newVideo.channel,
//         "image": newVideo.image
//     }

//     fs.writeFile('videoList.json', JSON.stringify([...videoList, newVideoThumb]), (err) => console.log(err))
    
//     fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos, newVideo]), (err) => console.log(err))
    
//     res.send(JSON.stringify(newVideo));
// });

// app.get('/videos/:videoId', (req, res) => {
//     res.send(mainVideos.find(video => video.id === req.params.videoId));
// })

// app.put('/videos/:videoId/likes', (req, res) => {
//     mainVideos.find(video => video.id === req.params.videoId).likes++

//     fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//     res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId)));
// })

// app.post('/videos/:videoId/comments', (req, res) => {
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

// app.delete('/videos/:videoId/comments/:commentId', (req, res) => {
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

// app.put('/videos/:videoId/comments/:commentId/likes', (req, res) => {
//     mainVideos.find(video => video.id === req.params.videoId).comments
//     .find(comment => comment.id === req.params.commentId).likes++

//     fs.writeFile('mainVideos.json', JSON.stringify([...mainVideos]), (err) => console.log(err))

//     res.send(JSON.stringify(mainVideos.find(video => video.id === req.params.videoId).comments
//     .find(comment => comment.id === req.params.commentId)));
// })

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});