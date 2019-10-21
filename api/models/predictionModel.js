'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var predictionSchema = new Schema({
  hash: String,
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
},{
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

module.exports = mongoose.model('Predictions', predictionSchema);