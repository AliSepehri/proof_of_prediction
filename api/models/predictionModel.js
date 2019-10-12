'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var predictionSchema = new Schema({
  hash: String,
  createdAt: String,
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
});

module.exports = mongoose.model('Predictions', predictionSchema);