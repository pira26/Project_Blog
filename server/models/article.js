const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
	userName: String,
	titles: String,
	posts: String,
  	comments: String,
	like: Number,
	picture_url: String
});

module.exports = mongoose.model('Article', ArticleSchema);