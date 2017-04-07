const express = require('express');

const router = express.Router();
const Article = require('../models/article.js');

router.route('/blog')
	.get((req, res) => {
		Article.find((err, articles) => {
			if(err){
				res.send(err);
			}
			res.send(articles);
		})
	})
	.post((req,res) => {
		const article = new Article();
		article.userName = req.body.userName;
		article.titles = req.body.titles;
		article.posts = req.body.posts;
		article.comments = req.body.comments;
		article.likes = req.body.likes;
		article.picture_url = req.body.picture_url;
		article.save((err) => {
			if(err){
				res.send(err);
			}
			res.send({message: 'article have been sended'});
		});
	});

router.route('/blog/:article_id')
	.get((req, res) => {
		Article.findOne({_id: req.params.article_id}, (err, articles) => {
			if(err){
				res.send(err);
			}
			res.send(articles);
		})
	})
	.put((req, res) => {
		Article.findOne({_id: req.params.article_id}, (err, articles) => {
			articles.userName = req.body.userName;
			articles.titles = req.body.titles;
			articles.posts = req.body.posts;
			articles.comments = req.body.comments;
			articles.likes = req.body.likes;
			article.picture_url = req.body.picture_url;
			articles.save((err) => {
				if(err){
					res.send(err);
				}
				res.send(articles);
			});
		});
	})
	.delete((req, res) => {
		Article.remove({_id: req.params.article_id}, (err) => {
			if(err) res.send(err);
			res.send({message: 'article deleted'});
		});
		// res.redirect('/articles');
	});

module.exports = router;