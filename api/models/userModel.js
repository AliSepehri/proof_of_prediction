'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  fullname: String,
  predictions: [{ type: Schema.Types.ObjectId, ref: 'Predictions' }]
},{
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

module.exports = mongoose.model('Users', userSchema);