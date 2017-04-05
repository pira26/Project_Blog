const express = require('express');

const router = express.Router();
const Article = require('../models/article.js');

router.route('/articles')
	.get((req, res) => {
		Article.find((err, artiles) => {
			if(err){
				res.send(err);
			}
			res.send(artiles);
		})
	})
	.post((req,res) => {
		const article = new Article();
		article.userName = req.body.userName;
		article.comments = req.body.comments;
		article.date = Date.now();
		article.save((err) => {
			if(err){
				res.send(err);
			}
			res.send({message: 'article have been sended'});
		});
	});

router.route('/articles/:article_id')
	.get((req, res) => {
		Article.findOne({_id: req.params.article_id}, (err, articles) => {
			if(err){
				res.send(err);
			}
			//res.send(articles)
		})
	})
	.put((req, res) => {
		Article.findOne({_id: req.params.article_id}, (err, articles) => {
			article.userName = req.body.userName;
			article.comments = req.body.comments;
			article.date = Date.now();
			article.save((err) => {
				if(err){
					res.send(err);
				}
				res.send({message: 'article have been updated'});
			});
		});
	})
	.delete((req, res) => {
		Article.remove({_id: req.params.article_id}, (err) => {
			if(err){
				res.send(err);
			}
			res.send({message: 'article has been deleted'});
		});
		res.redirect('/articles');
	});

module.exports = router;