pragma solidity ^0.4.16;
contract BlockAppsData {
    //variables for indexing and registering users
    mapping (address => uint32) public user_id_number;
    mapping (uint32 => string) public usernames;
    uint32 public current_number_users  = 1;
    mapping (address => bool) public permissioned_addresses;
    
    //list of admins
    mapping (address => bool) public admins;
    uint32 public num_admins;

    //BlockAppsData framework variables
    mapping (bytes16 => bool) public valid_keys;
    mapping (uint32 => mapping (bytes16 => string)) public app_data;


    address[] public history;
    address[] public sent_in_addresses;


    //Constructor sets inital admin
    //Still need to set up and admin framework for adding and removing admins
    //Other admin controlls will also have to be added
    function BlockAppsData(address _inital_admin) public{
        if(num_admins == 0){
            admins[_inital_admin] = true;
            num_admins += 1;
        }
    }

    function get_user_id_number(address _address) public returns (uint32){
        return user_id_number[_address];
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
        history.push(msg.sender);
        if(admins[msg.sender] == true){
            valid_keys[_new_key] = true;
        }
    }

    //Here admins can add new key's to where users can put there data
    function add_new_permissioned_address(address _new_permissioned_address) public {
        if(admins[msg.sender] == true){
            permissioned_addresses[_new_permissioned_address] = true;
        }
    }

    //Here only users that have registered user names can add data
    function add_user_data(bytes16 _key, string _users_data) public {
        history.push(msg.sender);
        uint32 _tmp_user_id = user_id_number[msg.sender];
        if(_tmp_user_id != 0) {
            if(valid_keys[_key]){
                app_data[_tmp_user_id][_key] = _users_data;
            }
        }
    } 
    function permissioned_add_user_data(bytes16 _key, string _users_data, address _from) public {
        history.push(msg.sender);
        sent_in_addresses.push(_from);
        if(permissioned_addresses[msg.sender] == true){
            uint32 _tmp_user_id = user_id_number[_from];
            if(_tmp_user_id != 0) {
                if(valid_keys[_key]){
                    app_data[_tmp_user_id][_key] = _users_data;
                }
            }
        }
    }
}