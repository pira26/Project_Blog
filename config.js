const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  "port": process.env.PORT || 8000,	
  "dbUrl": `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds147480.mlab.com:47480/blog`,
  "jwtSecret": "a secret phrase!!"
}