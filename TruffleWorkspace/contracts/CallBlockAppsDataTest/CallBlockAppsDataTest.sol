pragma solidity ^0.4.16;

import "../BlockAppsData/BlockAppsData.sol";

contract CallBlockAppsDataTest {
    
    function createNewTutor(address _address, bytes16 _key, string _data)public {
        BlockAppsData database = BlockAppsData(_address);
        //Add Key tutor_name______
        database.add_user_data(_key, _data);
    }
}