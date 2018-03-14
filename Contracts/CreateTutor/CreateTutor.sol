pragma solidity ^0.4.16;
contract CreateTutor {
    
    struct Tutor 
    {
        string name;
        string capable_of_tutoring;
        string website;
        string ipfs_link;
        string email;
        uint balance;
    }

    mapping (address => Tutor) public tutors;
    address public owner;
    function CreateTutor() public
    {
        owner = msg.sender;
    }
    function CreateNewTutor(
        string tmp_name,
        string tmp_capable_of_tutoring,
        string tmp_website,
        string tmp_ipfs_link,
        string tmp_email
    ) public payable
    {
        var tmp_tutor = tutors[msg.sender];
        tmp_tutor.name = tmp_name;
        tmp_tutor.capable_of_tutoring = tmp_capable_of_tutoring;
        tmp_tutor.website = tmp_website;
        tmp_tutor.ipfs_link = tmp_ipfs_link;
        tmp_tutor.email = tmp_email;
        tmp_tutor.balance = 0;
    }
    function set_name(string tmp_name) public 
    {
        tutors[msg.sender].name = tmp_name;
    }  
    function set_capable_of_tutoring(string tmp_capable_of_tutoring) public 
    {
        tutors[msg.sender].capable_of_tutoring = tmp_capable_of_tutoring;
    }  
    function set_website(string tmp_website) public 
    {
        tutors[msg.sender].website = tmp_website;
    }  
    function set_ipfs_link(string tmp_ipfs_link) public 
    {
        tutors[msg.sender].ipfs_link = tmp_ipfs_link;
    }  
    function set_email(string tmp_email) public 
    {
        tutors[msg.sender].email = tmp_email;
    }
}