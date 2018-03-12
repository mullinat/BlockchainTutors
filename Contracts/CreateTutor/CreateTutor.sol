pragma solidity ^0.4.16;

contract CreateTutor {
    
    struct Tutor 
    {
        string name;
        address eth_address;
        string[] capable_of_tutoring;
        string website;
        string ipfs_link;
        string email;
        uint balance;
        int[] eth_recieved_or_sent;
        int[] amount_recieved_or_sent;
    }

    function invoice(
        string to_name,
        address to_address,
        address invoice_amount,
        string[] capable_of_tutoring,
        string website,
        string ipfs_link,
        string email
    ) public payable returns (uint8[5])
    {
        return([0,1,2,3,4]);
    }

    function CreateTutor(
        string name,
        address eth_address,
        string[] capable_of_tutoring,
        string website,
        string ipfs_link,
        string email
    ) public payable
    {

    }
}
