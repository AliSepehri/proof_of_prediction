const Web3 = require('web3');
const web3 = new Web3(process.env.ETHEREUM_NETWORK);

module.exports = web3;
