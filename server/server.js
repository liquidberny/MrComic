//mongodb
require('./config/db')

const app = require('express')();
const port = 3001;

//cors
const cors = require("cors");
app.use(cors());

const UserRouter = require('./api/User');
const ComicRouter = require('./api/Comic')
//For accepting post ffrom data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter)
app.use('/comic', ComicRouter)
app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})

