const contract = require("@truffle/contract");
const connection = require("../connection");
const PredictionHashJson  = require("../../../../truffle/build/contracts/PredictionHash.json");

const PredictionHash = contract(PredictionHashJson);
PredictionHash.setProvider(connection._provider);

let result = {};
PredictionHash.deployed().then(_instance => { result.instance = _instance });

module.exports = result;
