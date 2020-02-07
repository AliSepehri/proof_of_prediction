'use strict';

const predictionHashContract = require("../services/ethereum/contracts/predictionHash");

var mongoose = require('mongoose'),
  predictionModel = mongoose.model('Predictions');

exports.index = function(req, res) { 
  predictionModel.find({}, function(err, prediction) {
    if (err) res.send(err);
    res.json(prediction);
  });
};

exports.show = function(req, res) {
  const id = req.params.id;

  predictionModel.findOne({_id: id}, function(err, prediction) {
    if (err)
      res.send(err);
    res.json(prediction);
  });
};

exports.create = function(req, res) {
  const currentUser = req.currentUser;

  var newPrediction = new predictionModel(req.body);
  if (currentUser) newPrediction.user = currentUser._id;

  newPrediction.save(function(err, prediction) {
    if (err) res.send(err);

    predictionHashContract.create(prediction.hash)
      .then((block) => {
        prediction.transactionId = block.tx;
        prediction.save(function(){
          res.json(prediction);
        });
      }).catch((err) => {
        res.json({error: 'Something went wrong!'});
      });
  });
};

exports.delete = function(req, res) {};
