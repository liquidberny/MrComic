const mongoose = require('mongoose');

const ComicSchema = new mongoose.Schema({
    name: String,
    // issue: Number,
    editorial: String,
    genre: String,
    characters: [String],
    year: Number,
    description: String,
    approved: {
        type: Boolean,
        default: false
    },
    img: {
        data: Buffer,
        contentType: String,
        name: String,
    },
    //add this with ofArrayOfNumbers: [[Number]], saving posts _id
    // posts recientes (foreign key: post) 
    // posts populares (foreign key: post) 

});

const Comic = mongoose.model('Comic', ComicSchema)
module.exports = Comic;