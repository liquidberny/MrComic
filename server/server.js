//mongodb
require('./config/db')

const app = require('express')();
const port = 3001;

const UserRouter = require('./api/User');

//For accepting post ffrom data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter)
app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})