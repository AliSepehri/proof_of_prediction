pragma solidity >=0.4.0 <0.6.0;
contract SimpleStorage {
   uint storedData;

   event SetData(address indexed _setter, uint _value);

   function set(uint x) public {
      storedData = x;
      emit SetData(msg.sender, x);
   }

   function get() public view returns (uint) {
      return storedData;
   }
}