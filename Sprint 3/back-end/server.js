const express = require('express');
const app = express();
const cors = require('cors');
const videosRoute = require('./routes/videosRoute')

app.use(cors())
app.use(express.json())
require('dotenv').config();

app.use('/videos', videosRoute)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
});