require('dotenv').config();
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000
  mongoose = require('mongoose'),
  models = require('./app/models'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/proofOfPrediction_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes  = require('./app/routes');
routes(app);

app.listen(port);

console.log('Todo list RESTful API server started on: ', port);
