(async function() {
  const Web3 = require('web3');
  const provider = new Web3.providers.HttpProvider("http://localhost:8545");
  const contract = require("@truffle/contract");

  const path = require('path');
  const SimpleStorageJson  = require(path.join(__dirname, 'truffle/build/contracts/SimpleStorage.json'));
  const SimpleStorage = contract(SimpleStorageJson);
  SimpleStorage.setProvider(provider);

  let simpleStorageInstance = await SimpleStorage.deployed()

  await simpleStorageInstance.set(10, { from: "0x0223e2b58030Cb7c66AD2867d43160FAdAE3D510" });

  let storedValue = await simpleStorageInstance.get();
  console.log("======>", storedValue.toNumber());
})();