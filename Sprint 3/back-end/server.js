const express = require('express');
const app = express();
const cors = require('cors');
const videosRoute = require('./routes/videosRoute')

app.use(cors())
app.use(express.json())

app.use('/videos', videosRoute)

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});