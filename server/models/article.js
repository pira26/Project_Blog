const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
	userName: String,
	userId: String,
	userEmail: String,
  	comment: String,
	like: Number,
	date: { type: Date, default: Date.now },
	address: String,
	urlImage: String
});

module.exports = mongoose.model('Article', ArticleSchema);