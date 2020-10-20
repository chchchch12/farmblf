pragma solidity ^0.5.0;

import "./DaiToken.sol";

contract DappTokenSale {
address addr = 0x06F3E50662acd40057E8Be6119CeDE7E88b76C8B;
address payable owner = address(uint160(addr));
    
    DaiToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
	

    event Sell(address _buyer, uint256 _amount);

    constructor(DaiToken _tokenContract, uint256 _tokenPrice) public {
        owner = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }
function buyTokens(uint256 _number) public payable { 
uint256 _amount = msg.value; 
require(msg.sender != address(0)); require(_amount > 0); 

require(tokenContract.transfer(msg.sender, _number)); 
tokensSold += _number; 

emit Sell(msg.sender, _number); }

    function endSale() public {
        require(msg.sender == owner);
        require(tokenContract.transfer(owner, tokenContract.balanceOf(address(this))));

        // UPDATE: Let's not destroy the contract here
        // Just transfer the balance to the owner
        owner.transfer(address(this).balance);
    }
}
