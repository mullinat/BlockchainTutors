pragma solidity ^0.4.16;

contract CreateTutor {
    
    struct Tutor 
    {
        string name;
        address eth_address;
        string capable_of_tutoring;
        string website;
        string ipfs_link;
        string email;
        uint balance;
    }

    mapping (uint => Tutor) public tutors;
    uint32 public next_tutor_index = 1;
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
        var tmp_tutor = tutors[next_tutor_index];
        tmp_tutor.name = tmp_name;
        tmp_tutor.eth_address = msg.sender;
        tmp_tutor.capable_of_tutoring = tmp_capable_of_tutoring;
        tmp_tutor.website = tmp_website;
        tmp_tutor.ipfs_link = tmp_ipfs_link;
        tmp_tutor.email = tmp_email;
        tmp_tutor.balance = 0;
        next_tutor_index = next_tutor_index + 1;
    }
    /*
        Create reset functions
        string name;
        address eth_address;
        string capable_of_tutoring;
        string website;
        string ipfs_link;
        string email;
        uint balance;
    */        
}
/*
    Create Invoice Function
    function invoice(
        string to_name,
        address to_address,
        address invoice_amount,
        string capable_of_tutoring,
        string website,
        string ipfs_link,
        string email
    ) public payable returns (uint8[5])
    {
        return([0,1,2,3,4]);
    }
*/