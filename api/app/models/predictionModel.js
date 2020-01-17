'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var predictionSchema = new Schema({
  hash: String,
  transactionId: String,
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
},{
  timestamps: true
});

module.exports = mongoose.model('Predictions', predictionSchema);