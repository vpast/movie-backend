const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieCommentSchema = new Schema({
    id: Schema.Types.ObjectId,
        name: String,
        movie_id: Schema.Types.ObjectId,
        text: String,
        date: String
});

const model = mongoose.model('MovieComment', MovieCommentSchema, 'movie-comments');

module.exports = model;