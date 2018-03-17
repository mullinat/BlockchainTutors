pragma solidity ^0.4.16;

contract CreateStudent {
    
    struct Student {
        string name;
        uint balance;
        string needTutorFor ;
        string email;
    }

    mapping (address => Student) public students;
    address public owner;
    function CreateStudent() public {
        owner = msg.sender;
    }
    function createNewStudent(
        string tmpName,
        string needTutorFor,
        string tmpEmail
    ) public payable
    {
        var tmpTutor = students[msg.sender];
        tmpTutor.name = tmpName;
        tmpTutor.needTutorFor = needTutorFor;
        tmpTutor.email = tmpEmail;
        tmpTutor.balance = 0;
    }
    function setName(string tmpName) public {
        students[msg.sender].name = tmpName;
    }  
    function setCapableOfTutoring(string tmpNeedTutorFor) public {
        students[msg.sender].needTutorFor = tmpNeedTutorFor;
    } 
    function setEmail(string tmpEmail) public {
        students[msg.sender].email = tmpEmail;
    }
}
