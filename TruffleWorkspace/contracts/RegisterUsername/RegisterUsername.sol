pragma solidity ^0.4.16;
contract RegisterUsername {
    mapping (address => uint32) public user_id_number;
    mapping (uint32 => string) public usernames;
    uint32 public current_number_users  = 0;

    function RegisterUsername(string _username) public {
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