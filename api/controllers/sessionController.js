'use strict'

var mongoose = require('mongoose'),
  userModel = mongoose.model('Users');

exports.create = function(req, res) {
  var jwt = ':D';
  res.json({token: jwt})
}