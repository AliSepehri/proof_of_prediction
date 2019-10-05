var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
  mongoose = require('mongoose'),
  predictionModel = require('./api/models/predictionModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/proofOfPrediction_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/predictionRoutes');
routes(app);

app.listen(3000);

console.log('Todo list RESTful API server started on: ', port);
