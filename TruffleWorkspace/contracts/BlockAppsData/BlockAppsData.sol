pragma solidity ^0.4.16;
contract BlockAppsData {
    //variables for indexing and registering users
    mapping (address => uint32) public user_id_number;
    mapping (uint32 => string) public usernames;
    uint32 public current_number_users  = 1;
    
    //list of admins
    mapping (address => bool) admins;
    uint32 num_admins;

    //BlockAppsData framework variables
    mapping (bytes16 => bool) valid_keys;
    mapping (uint32 => mapping (bytes16 => string)) app_data;

    //Constructor sets inital admin
    //Still need to set up and admin framework for adding and removing admins
    //Other admin controlls will also have to be added
    function BlockAppsData(address _inital_admin) public{
        if(num_admins == 0){
            admins[_inital_admin] = true;
            num_admins += 1;
        }
    }

    //Public keys map to and ID number that increses incrementally
    //The ID number then mapps to the users Username
    function set_username(string _username) public {
        if(user_id_number[msg.sender] == address(0)) {
            user_id_number[msg.sender] = current_number_users;
            current_number_users += 1;
            usernames[user_id_number[msg.sender]] = _username;
        }
        else {
            usernames[user_id_number[msg.sender]] = _username;
        }
    }

    //Here admins can add new key's to where users can put there data
    function add_valid_data_key(bytes16 _new_key) public {
        if(admins[msg.sender] == true){
            valid_keys[_new_key] = true;
        }
    }

    //Here only users that have registered user names can add data
    function add_user_data(bytes16 _key, string _users_data) public {
        uint32 _tmp_user_id = user_id_number[msg.sender];
        if(_tmp_user_id != 0) {
            if(valid_keys[_key]){
                app_data[_tmp_user_id][_key] = _users_data;
            }
        }
    } 
}