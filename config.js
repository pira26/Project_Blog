const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  "port": process.env.PORT || 8000,	
  "dbUrl": `mongodb://admin:admin2017@ds147480.mlab.com:47480/blog`,
  "jwtSecret": "a secret phrase!!"
}