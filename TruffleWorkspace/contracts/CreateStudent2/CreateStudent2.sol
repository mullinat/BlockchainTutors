pragma solidity ^0.4.16;

import "../BlockAppsData/BlockAppsData.sol";

contract CreateStudent2 {
    
    struct Student {
        string name;
        uint balance;
        string needTutorFor ;
        string email;
    }
    BlockAppsData database = BlockAppsData(BlockAppsData_address);
    mapping (address => Student) public students;
    address public owner;
    address public BlockAppsData_address;

    function CreateStudent2(address _admin) public {
        if(owner == address(0)){
            owner = _admin;
        }
    }
    function set_BlockAppsData_address(address _tmp_address) public {
        if(msg.sender == owner){
            BlockAppsData_address = _tmp_address;
        }
    }
    function createNewStudent(
        string tmpName,
        string needTutorFor,
        string tmpEmail) 
    public {
        //var tmpTutor = students[msg.sender];
        database = BlockAppsData(BlockAppsData_address);
        //tmpTutor.name = tmpName;
        database.permissioned_add_user_data("student_name____", tmpName, msg.sender);
        //tmpTutor.needTutorFor = needTutorFor;
        database.permissioned_add_user_data("need_tutor_for__", needTutorFor, msg.sender);
        //tmpTutor.email = tmpEmail;
        database.permissioned_add_user_data("student_email___", tmpEmail, msg.sender);
        //tmpTutor.balance = 0;
    }
    function setName(string tmpName) public {
        //students[msg.sender].name = tmpName;
        database = BlockAppsData(BlockAppsData_address);
        database.permissioned_add_user_data("student_name____", tmpName, msg.sender);
    }  
    function setCapableOfTutoring(string tmpNeedTutorFor) public {
        //students[msg.sender].needTutorFor = tmpNeedTutorFor;
        database = BlockAppsData(BlockAppsData_address);
        database.permissioned_add_user_data("need_tutor_for__", tmpNeedTutorFor, msg.sender);
    } 
    function setEmail(string tmpEmail) public {
        //students[msg.sender].email = tmpEmail;
        database = BlockAppsData(BlockAppsData_address);
        database.permissioned_add_user_data("student_email___", tmpEmail, msg.sender);
        
    }
}
