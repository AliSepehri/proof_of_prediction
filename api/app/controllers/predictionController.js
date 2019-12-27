'use strict';

var mongoose = require('mongoose'),
  predictionModel = mongoose.model('Predictions');

exports.index = function(req, res) {
  predictionModel.find({}, function(err, prediction) {
    if (err)
      res.send(err);
    res.json(prediction);
  });
};

exports.create = function(req, res) {
  const currentUser = req.currentUser;

  var newPrediction = new predictionModel(req.body);
  if (currentUser)
    newPrediction.user = currentUser._id;

  newPrediction.save(function(err, prediction) {
    if (err)
      res.send(err);
    
    if (currentUser) {
      currentUser.predictions.push(prediction);
      currentUser.save();
    }

    res.json(prediction);
  });
};

exports.show = function(req, res) {};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};
