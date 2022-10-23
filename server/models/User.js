const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // logged: {
    //     type: 'boolean',
    //     default: false,
    //     required: true,
    // },
});

const User =  mongoose.model('User', UserSchema )
module.exports = User;
