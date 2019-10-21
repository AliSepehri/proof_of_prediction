'use strict'

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  secrets = require('../config/secrets'),
  userModel = mongoose.model('Users');

exports.create = async function(req, res) {
  // TODO: Do authentication

  const user = await userModel.findOne({email: req.body.email});
  const token = await jwt.sign({id: user._id}, secrets.jwtKey)

  res.json({token})
}