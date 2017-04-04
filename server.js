const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const config = require('./config.js');

// connect to the database and load models
require('./server/models').connect(config.dbUrl, {auth:{authdb: "admin"}});
mongoose.set('debug', true) //turn on debug

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
	res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization'); 
	next();
});

// logs 
app.use(morgan('dev'));

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

const apiRoutes = require('./server/routes/api');
app.use('/api', apiRoutes);

// app.route("*").get((req, res) => {
//   res.sendFile(express.static(path.join(__dirname, 'dist')));
// });

// tell the app to look for static files in these directories
app.use(express.static('./client/src/static/'));
app.use(express.static('./client/dist/'));

const article = require('./server/routes/article');
app.use(article);

// start the server
app.listen(config.port, () => {
  console.log('Server is running on http://127.0.0.1:8000 or ', config.port, config.dbUrl);
});