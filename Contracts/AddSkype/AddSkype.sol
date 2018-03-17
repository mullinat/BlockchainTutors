pragma solidity ^0.4.16;

contract AddSkype {
    mapping (address => string) public users_skypes;
    address private owner;
    function AddSkype() public {
        owner = msg.sender;
    }
    function setSkype(string tmpSkype) public {
        users_skypes[msg.sender] = tmpSkype;
    }  
}
