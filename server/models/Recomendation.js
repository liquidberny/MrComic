const mongoose = require('mongoose');

const RecomendetionSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Recomendation = mongoose.model('Recomendation', RecomendetionSchema)
module.exports = Recomendation;