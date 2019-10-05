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
  var newPrediction = new predictionModel(req.body);
  newPrediction.save(function(err, prediction) {
    if (err)
      res.send(err);
    res.json(prediction);
  });
};

exports.show = function(req, res) {};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};
