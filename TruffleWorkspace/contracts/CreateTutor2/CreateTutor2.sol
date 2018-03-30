pragma solidity ^0.4.16;

import "../BlockAppsData/BlockAppsData.sol";

contract CreateTutor2 {
    
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
    
    address BlockAppsData_address;

    function CreateTutor2(address _admin) public {
        if(owner == address(0)){
            owner = _admin;
        }
    }
    function set_BlockAppsData_address(address _tmp_address) public {
        if(msg.sender == owner){
            BlockAppsData_address = _tmp_address;
        }
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
        BlockAppsData database = BlockAppsData(BlockAppsData_address);

        tmpTutor.name = tmpName;

        //Add Key tutor_name______
        database.add_user_data("tutor_name______", tmpName);

        tmpTutor.capableOfTutoring = tmpCapableOfTutoring;
        //Add Key CapableOfTutorin
        database.add_user_data("CapableOfTutorin", tmpCapableOfTutoring);


        tmpTutor.website = tmpWebsite;
        //Add Key tutoring_website
        database.add_user_data("tutoring_website", tmpWebsite);


        tmpTutor.ipfsLink = tmpIpfsLink;
        //Add Key TutoringIPFSLink
        database.add_user_data("TutoringIPFSLink", tmpIpfsLink);


        tmpTutor.email = tmpEmail;
        //Add Key tutoring_email__
        database.add_user_data("tutoring_email__", tmpEmail);

        //This should be removed
        tmpTutor.balance = 0;

        //The CreateTutor contract has an index of existing tutors which is used to index and search for tutors
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