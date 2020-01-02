(async function() {
  const Web3 = require('web3');
  const web3 = new Web3("http://localhost:8545");
  const contract = require("@truffle/contract");

  const path = require('path');
  const SimpleStorageJson  = require(path.join(__dirname, 'truffle/build/contracts/SimpleStorage.json'));
  const SimpleStorage = contract(SimpleStorageJson);
  SimpleStorage.setProvider(web3._provider);

  let simpleStorageInstance = await SimpleStorage.deployed();

  // Call "set" function of smart-contract
  let result = await simpleStorageInstance.set(9, { from: "0x0223e2b58030Cb7c66AD2867d43160FAdAE3D510" });
  console.log("Value = ", result.logs[0].args._value.toNumber());
  console.log("Setter Address = ", result.logs[0].args._setter);
  console.log("Gas Price = ", result.receipt.gasUsed);

  // Call "get" function of smart-contract
  let storedValue = await simpleStorageInstance.get({ from: "0x1bA2cf18C0D49F15A8a3E72cB73b0BB6d0997526" });
  console.log("Stored Value = ", storedValue.toNumber());

  // Fetch transaction's logs by transaction ID
  let tx = await web3.eth.getTransactionReceipt(result.tx);
  let logs = SimpleStorage.decodeLogs(tx.logs);
  console.log("Value = ", logs[0].args._value.toNumber());
  console.log("Setter Address = ", logs[0].args._setter);
})();
