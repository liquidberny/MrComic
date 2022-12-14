const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    admin: { type: Boolean, default: false},
});

const User =  mongoose.model('User', UserSchema )
module.exports = User;
