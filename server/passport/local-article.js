const Article = require('mongoose').model('Article');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  postField: 'post',
  titleField: 'title',
  pictureField: 'picture',
  passReqToCallback: true
}, (req, done) => {
  const articleData = {
    userName: req.body.userName.trim(),
    post: req.body.post.trim(),
    title: req.body.title.trim(),
    picture: req.body.picture.trim(),
  };

  const newArticle = new Article(articleData);
  newArticle.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});