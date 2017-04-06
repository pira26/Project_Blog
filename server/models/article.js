const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
	userName: String,
	titles: {type: String, required: false},
	posts: {type: String, required: false},
  	comments: {type: String, required: false},
	like: Number
});

module.exports = mongoose.model('Article', ArticleSchema);