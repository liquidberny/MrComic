//mongodb
require('./config/db')

const app = require('express')();
const port = 3001;

//cors
const cors = require("cors");
app.use(cors());

const UserRouter = require('./api/User');
const ComicRouter = require('./api/Comic')
const RecomendadionRouter = require("./api/Recomendation")
const MessageRouter = require("./api/Message")
//For accepting post from data
const bodyParser = require('express').json;
app.use(bodyParser({
    limits: { fileSize: 3 * 1024 * 1024 }
}));

//this is for images or files in general
const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use('/user', UserRouter)
app.use('/comic', ComicRouter)
app.use("/message", MessageRouter)
app.use("/recomendation", RecomendadionRouter)
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

