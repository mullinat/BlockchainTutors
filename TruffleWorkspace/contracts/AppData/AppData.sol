pragma solidity ^0.4.16;
contract AppData {

    //Contract Variables
    mapping (bytes16 => bool) public allowed_strings;
    mapping(uint32 => mapping(bytes16 => string)) public contract_data;
    address public owner;
    address public UsernameContractAddress;


    function AppData() public {
        if(address(0) == owner) {
            owner = msg.sender;
        }
    }
    function SetUsernameContractAddress(address tmp_address) public {
        if(owner == msg.sender){
            UsernameContractAddress = tmp_address;
        }
    }

    function send_data(bytes16 key, string data) public {
        //Callee c = Callee(addr);
        //return c.getValue(100);
        RegisterUsername tmp_username_contract = RegisterUsername(UsernameContractAddress);
        uint32 user = tmp_username_contract.user_id_number(msg.sender);
        if(allowed_strings[key]){
            contract_data[user][key] = data;
        }
    }
}

contract RegisterUsername {
    mapping (address => uint32) public user_id_number;
    mapping (uint32 => string) public usernames;
    uint32 public current_number_users  = 1;

    function SetUsername(string _username) public {
        if(user_id_number[msg.sender] == address(0)) {
            user_id_number[msg.sender] = current_number_users;
            current_number_users += 1;
            usernames[user_id_number[msg.sender]] = _username;
        }
        else {
            usernames[user_id_number[msg.sender]] = _username;
        }
    }
}