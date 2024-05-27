// Mon May 27 12:26 AM 2024

const express = require('express');
const app = express();

const env = require('dotenv');
env.config();

const cookieParser = require('cookie-parser');
const cors = require('cors');

//routes import
const AdminRouter = require('./Admin/Router/authRoute');
const distRouter = require('./Admin/Router/distRoute');

//for generating secret token
// const crypto = require('crypto');
// const secretToken = crypto.randomBytes(32).toString('hex');
// console.log(secretToken);

//Database
const connectDB = require('./Database/ConnectDB');
connectDB();

//cors
app.use(cors({
    origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
    credentials: true
}));

//middleware
app.use(express.json());
app.use(cookieParser());


app.use('/admin', AdminRouter, distRouter);




//routes
app.get('/', (req, res) => {
    res.send('Working Good '); 
});



//server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});