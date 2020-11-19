const express = require('express');
const app = express();
const cors = require('cors');
const videosRoute = require('./routes/videosRoute')

require('dotenv').config();
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.use('/videos', videosRoute)

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
});