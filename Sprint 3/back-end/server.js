const express = require('express');
const app = express();
const cors = require('cors');
const videosRoute = require('./routes/videosRoute')

// allows usage of .env
require('dotenv').config();
const port = process.env.PORT
// allows CORS
app.use(cors())
// request.body middleware
app.use(express.json())
// allows serving static files
app.use(express.static('public'));
// videos route
app.use('/videos', videosRoute)

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
});