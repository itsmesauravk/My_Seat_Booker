// Mon May 27 12:26 AM 2024

const express = require('express');
const app = express();

const env = require('dotenv');
env.config();



//middleware
app.use(express.json());




//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});



//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});