const Web3 = require("web3");
const PredictionHashJson  = require("../../../../truffle/build/contracts/PredictionHash.json");

const web3 = require("../connection");
web3.eth.accounts.wallet.add(process.env.ETHEREUM_APP_ACCOUNT_PRIVATE_KEY);

let instance;
web3.eth.getCode(process.env.PREDICTION_HASH_CONTRACT_ADDRESS).then((contractByteCode) => {
  instance = new web3.eth.Contract(PredictionHashJson.abi, process.env.PREDICTION_HASH_CONTRACT_ADDRESS, { data: contractByteCode });
})

exports.create = function(predictionHash) {
  return instance.methods.create(predictionHash)
    .send({from: process.env.ETHEREUM_APP_ACCOUNT_ID, gas: 32360})
}
