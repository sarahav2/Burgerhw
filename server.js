// var Sequelize = require('sequelize'), connection;
// if (process.env.JAWSDB_URL) {
//   connection = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   connection = new Sequelize('burgers_db', 'root', 'password', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: '3000'
//   })
// }

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();