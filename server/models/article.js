const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
	userName: String,
	title: {type: String, required: true},
	posts: {type: String, required: true},
  	comments: {type: String, required: true},
	like: Number
});

module.exports = mongoose.model('Article', ArticleSchema);