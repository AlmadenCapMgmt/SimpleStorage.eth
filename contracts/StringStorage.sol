// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract StringStorage {
    string private storedString;
    address public owner;
    
    event StringStored(string indexed value, address indexed sender);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }
    
    function setString(string memory newString) public onlyOwner {
        storedString = newString;
        emit StringStored(newString, msg.sender);
    }
    
    function getString() public view returns (string memory) {
        return storedString;
    }
    
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        address previousOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(previousOwner, newOwner);
    }
}