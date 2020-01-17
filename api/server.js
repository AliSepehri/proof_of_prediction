require('dotenv').config();
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000
  mongoose = require('mongoose'),
  models = require('./app/models'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: Not proper config for production
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});

var routes  = require('./app/routes');
routes(app);

app.listen(port);

console.log('Todo list RESTful API server started on: ', port);
