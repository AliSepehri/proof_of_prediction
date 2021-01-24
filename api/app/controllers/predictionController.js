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
      res.status(404).send(err);
    res.json(prediction);
  });
};

exports.create = function(req, res) {
  const currentUser = req.currentUser;
  const { hash } = req.body;

  if(!hash) res.status(422).send({ hash: 'is required.' })

  var newPrediction = new predictionModel(req.body);
  if (currentUser) newPrediction.user = currentUser._id;

  newPrediction.save(function(err, prediction) {
    if (err) res.send(err);

    predictionHashContract.create(prediction.hash)
      .on('transactionHash', (txHash) => {
        console.log('TRANSACTION_HASH');
        console.log(txHash);
        prediction.transactionId = txHash;
        prediction.save(function(){
          res.json(prediction);
        });
      })
      .on('confirmation', (confirmations, receipt) => {
        console.log('CONFIRMATION');
        console.log(confirmations);
        console.log(receipt);
      })
      .on('receipt', (receipt) => {
        console.log('RECEIPT');
        console.log(receipt);
      })
      .on('error', (error, receipt, confirmations) => {
        console.log('ERROR');
        console.log(error);
        console.log(receipt);
        console.log(confirmations);
        res.json({error: 'Something went wrong!'});
      });
  });
};

exports.delete = function(req, res) {};
