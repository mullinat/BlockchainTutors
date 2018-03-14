pragma solidity ^0.4.16;
import "../CreateStudent/CreateStudent.sol";
import "../CreateTutor/CreateTutor.sol";

contract BlockchainTutorAgency {
    CreateStudent student_class;  
    CreateTutor tutor_class;

    struct Invoice 
    {
        address send_money_to;
        address reciepient;
        uint32 amount;
        string comment;
    }
    mapping (uint32 => Invoice) invoices;
    uint32 next_invoice_num = 0;
    function create_invoice(address tmp_student, uint32 _amount, string _what_for)public
    {
        invoices[next_invoice_num].send_money_to = msg.sender;
        invoices[next_invoice_num].reciepient = tmp_student;
        invoices[next_invoice_num].amount = _amount;
        invoices[next_invoice_num].comment = _what_for;
    }
}
