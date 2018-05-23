pragma solidity ^0.4.4;


contract KaziToken {

  // number of tokens available
  uint256 public totalSupply;
  function KaziToken() {
    // constructor
    totalSupply = 1000;
  }
}
