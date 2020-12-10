require('dotenv').config();
var cors = require('cors')
var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  models = require('./app/models'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

// TODO: Not proper config for production
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes  = require('./app/routes');
routes(app);

module.exports = app;
