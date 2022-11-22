const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: String,
});

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message;