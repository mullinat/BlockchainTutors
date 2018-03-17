pragma solidity ^0.4.16;
contract CreateTutor {
    
    struct Tutor {
        string name;
        string capableOfTutoring;
        string website;
        string ipfsLink;
        string email;
        uint balance;
    }

    mapping (address => Tutor) public tutors;
    mapping (uint32 => address) public tutors_lookup;
    uint32 public current_numbner_of_tutors = 0;
    address public owner;
    
    
    function CreateTutor() public {
        owner = msg.sender;
    }
    function createNewTutor(
        string tmpName,
        string tmpCapableOfTutoring,
        string tmpWebsite,
        string tmpIpfsLink,
        string tmpEmail
    ) public payable
    {
        var tmpTutor = tutors[msg.sender];
        tmpTutor.name = tmpName;
        tmpTutor.capableOfTutoring = tmpCapableOfTutoring;
        tmpTutor.website = tmpWebsite;
        tmpTutor.ipfsLink = tmpIpfsLink;
        tmpTutor.email = tmpEmail;
        tmpTutor.balance = 0;
        tutors_lookup[current_numbner_of_tutors] = msg.sender;
        current_numbner_of_tutors = current_numbner_of_tutors + 1;

    }
    function setName(string tmpName) public {
        tutors[msg.sender].name = tmpName;
    }  
    function setCapableOfTutoring(string tmpCapableOfTutoring) public {
        tutors[msg.sender].capableOfTutoring = tmpCapableOfTutoring;
    }  
    function setWebsite(string tmpWebsite) public {
        tutors[msg.sender].website = tmpWebsite;
    }  
    function setIpfsLink(string tmpIpfsLink) public {
        tutors[msg.sender].ipfsLink = tmpIpfsLink;
    }  
    function setEmail(string tmpEmail) public {
        tutors[msg.sender].email = tmpEmail;
    }
}