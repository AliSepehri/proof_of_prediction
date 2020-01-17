pragma solidity >=0.4.0 <0.6.0;
contract PredictionHash {
   event Predict(address indexed _setter, string _hash);

   function create(string memory _hash) public {
      emit Predict(msg.sender, _hash);
   }
}