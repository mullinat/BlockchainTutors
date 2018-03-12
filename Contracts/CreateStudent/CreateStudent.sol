pragma solidity ^0.4.16;

contract CreateStudent {
    
    struct Student {
        string name;
        address eth_address;
        uint balance;
        string[] need_tutor_for ;
        string email;
        int[] eth_recieved_or_sent;
        int[] amount_recieved_or_sent;
    }
}
