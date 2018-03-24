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
    mapping (uint32 => Invoice) public invoices;
    mapping (address => uint32[]) public from_invoice_lookup;
    mapping (address => uint32[]) public reciepient_invoice_lookup;
    mapping (address => uint256) public balances;
    uint32 next_invoice_num = 0;
    function create_invoice(address tmp_student, uint256 _amount, string _what_for) public {
        invoices[next_invoice_num].from = msg.sender;
        invoices[next_invoice_num].reciepient = tmp_student;
        invoices[next_invoice_num].amount = _amount;
        invoices[next_invoice_num].from_comment = _what_for;
        invoices[next_invoice_num].completed = false;
        from_invoice_lookup[msg.sender].push(next_invoice_num);
        reciepient_invoice_lookup[tmp_student].push(next_invoice_num);
        next_invoice_num = next_invoice_num + 1;
    }
    function update_balance() public payable{
        balances[msg.sender] += msg.value;
    }
    function withdrawl(uint256 _amount, address _reciever) public {
        if(_amount <= balances[msg.sender]){
            balances[msg.sender] = balances[msg.sender] - _amount;
            _reciever.transfer(_amount);
        }
    }
    function pay_invoice(uint32 _invoice_number, string _comment) public {
        if(msg.sender == invoices[_invoice_number].reciepient ){
            if(invoices[_invoice_number].amount <= balances[msg.sender])
            {
                balances[msg.sender] -= invoices[_invoice_number].amount;
                balances[invoices[_invoice_number].from] += invoices[_invoice_number].amount;
                invoices[_invoice_number].reciepient_comment = _comment;
                invoices[_invoice_number].completed = true;
            }
        }
    }
}
