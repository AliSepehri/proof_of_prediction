'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  fullname: String,
  createdAt: String,
  predictions: [{ type: Schema.Types.ObjectId, ref: 'Predictions' }]
});

module.exports = mongoose.model('Users', userSchema);