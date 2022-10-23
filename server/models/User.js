const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date
    // logged: {
    //     type: 'boolean',
    //     default: false,
    //     required: true,
    // },
});

const user =  mongoose.model('User', User )
module.exports = user;
