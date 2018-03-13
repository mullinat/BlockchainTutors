pragma solidity ^0.4.16;

contract CreateStudent {
    
    struct Student {
        string name;
        uint balance;
        string need_tutor_for ;
        string email;
    }

    mapping (address => Student) public students;
    address public owner;
    function CreateTutor() public
    {
        owner = msg.sender;
    }
    function CreateNewTutor(
        string tmp_name,
        string need_tutor_for,
        string tmp_email
    ) public payable
    {
        var tmp_tutor = students[msg.sender];
        tmp_tutor.name = tmp_name;
        tmp_tutor.need_tutor_for = need_tutor_for;
        tmp_tutor.email = tmp_email;
        tmp_tutor.balance = 0;
    }
    function set_name(string tmp_name) public 
    {
        students[msg.sender].name = tmp_name;
    }  
    function set_capable_of_tutoring(string tmp_need_tutor_for) public 
    {
        students[msg.sender].need_tutor_for = tmp_need_tutor_for;
    } 
    function set_email(string tmp_email) public 
    {
        students[msg.sender].email = tmp_email;
    }
}
