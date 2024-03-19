// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract HelloWorld {
    constructor(){
        console.log("this is a smart contract");
    }

    string message = "Hello Michael";
    uint[] public Feedbacks = [1, 2];
    string[] feed = ["hi", "hii"];

    function getMessage() public view returns(string memory) {
        return message;
    }

    function giveFeedback(string memory hi) public {
        //Feedbacks.
        feed.push(hi);

    }

    function getFeedbacks() public view returns(string[] memory) {
        return feed;
    }
}