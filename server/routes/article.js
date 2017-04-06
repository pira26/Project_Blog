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
		article.save((err) => {
			if(err){
				res.send(err);
			}
			res.send({message: 'article have been sended'});
		});
	});

router.route('/edit/:article_id')
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
			const article = Article();
			article.userName = req.body.userName;
			article.comments = req.body.comments;
			article.save((err) => {
				if(err){
					res.send(err);
				}
				res.send(article);
			});
		});
	})
	.delete((req, res) => {
		Article.remove({_id: req.params.article_id}, (err) => {
			const article = Article();
			if(err) res.send(err);
			res.send(article);
		});
		// res.redirect('/articles');
	});

module.exports = router;