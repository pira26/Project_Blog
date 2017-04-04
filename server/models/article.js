const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
	userName: String,
  	comment: String,
	like: Number,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);