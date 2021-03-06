// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract Inbox {
    string public message;
    
    function Inbox(string memory initialMessage) public{
        message = initialMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
    function temp() public view returns(address){
        return (msg.sender);
    }
}