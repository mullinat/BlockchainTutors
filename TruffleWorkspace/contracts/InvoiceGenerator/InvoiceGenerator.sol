pragma solidity ^0.4.16;

contract InvoiceGenerator {

    struct Invoice 
    {
        address from;//This user needs the money
        address reciepient;//This person has to pay them
        uint256 amount;
        string from_comment;
        string reciepient_comment;
        bool completed;
    }
    mapping (uint32 => Invoice) invoices;
    uint32 next_invoice_num = 0;
    function create_invoice(address tmp_student, uint32 _amount, string _what_for) public
    {
        invoices[next_invoice_num].from = msg.sender;
        invoices[next_invoice_num].reciepient = tmp_student;
        invoices[next_invoice_num].amount = _amount;
        invoices[next_invoice_num].from_comment = _what_for;
        invoices[next_invoice_num].completed = false;
    }
    function pay_invoice(uint32 invoice_number, string _comment) public payable
    {
        if(invoices[invoice_number].amount <= msg.value)
        {
            invoices[invoice_number].from.transfer(msg.value);
            invoices[invoice_number].reciepient_comment = _comment;
            invoices[invoice_number].completed = true;
        }
    }
}
