'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var predictionSchema = new Schema({
  hash: String,
  createdAt: String
});

module.exports = mongoose.model('Predictions', predictionSchema);