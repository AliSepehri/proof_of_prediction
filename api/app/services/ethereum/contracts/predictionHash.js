const contract = require("@truffle/contract");
const connection = require("../connection");
const PredictionHashJson  = require("../../../../truffle/build/contracts/PredictionHash.json");

const PredictionHash = contract(PredictionHashJson);
PredictionHash.setProvider(connection._provider);

let instance;
PredictionHash.deployed().then(_instance => { instance = _instance });

exports.create = function(predictionHash) {
  return instance.create(
    predictionHash,
    { from: process.env.ETHEREUM_APP_ACCOUNT_ID }
  )
}
