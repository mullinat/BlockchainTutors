var eth_balance;
function UpdateBalance() {
    GenerateInvoice.balances(web3.eth.coinbase, function (err, result) {
        //console.log(result["c"][0]);
        eth_balance = result["c"][0] / 10000;
        //update_your_balance_id();
        $("#your_balance").text("Your balance is " + eth_balance + "ETH");
    });
}

var index_invoices_from = [];
function FromInvoiceLookup(_index) {
    GenerateInvoice.from_invoice_lookup(web3.eth.coinbase, _index, function (err, result) {
        console.log(result);
        if (result != null) {
            index_invoices_from.push(result["c"][0]);
            FromInvoiceLookup(_index + 1)
        }
        //update_your_balance_id();
    });
}

var index_invoices_to = [];
function ReciepientInvoiceLookup(_index) {
    GenerateInvoice.reciepient_invoice_lookup(web3.eth.coinbase, _index, function (err, result) {
        console.log(result);
        if (result != null) {
            index_invoices_to.push(result["c"][0]);
            ReciepientInvoiceLookup(_index + 1)
            //update_your_balance_id();
        }
    });
}

var invoices_to = [];
var invoices_from = [];
function RefreshInvoices() {
    for (var i in index_invoices_to) {
        GenerateInvoice.invoices(i, function (err, result) {
            console.log(result);
            if (result != null) {
                invoices_to.push(result);
                //ReciepientInvoiceLookup(_index + 1)
                //update_your_balance_id();
            }
        });
    }
    for (var i in index_invoices_from) {
        GenerateInvoice.invoices(i, function (err, result) {
            console.log(result);
            if (result != null) {
                invoices_from.push(result);
                //ReciepientInvoiceLookup(_index + 1)
                //update_your_balance_id();
            }
        });
    }
}

function DisplayInfoices(){
    for(var i in invoices_to){
        $("#sent_invoices").append("<li> To  : " + invoices_to[i][1] + "</li>");
        $("#sent_invoices").append("<li> Amount = " + invoices_to[i][2] + "</li>");
        $("#sent_invoices").append("<li> Message Attached : " + invoices_to[i][3] + "</li>");
        $("#sent_invoices").append("<hr>");
    }
    for(var i in invoices_from){
        $("#incomeing_invoices").append("<li> From  : " + invoices_from[i][0] + "</li>");
        $("#incomeing_invoices").append("<li> Amount = " + invoices_from[i][2] + "</li>");
        $("#incomeing_invoices").append("<li> Message Attached : " + invoices_from[i][3] + "</li>");
        $("#incomeing_invoices").append("<hr>");
    }
}
var CreateStudentABI;
var CreateStudent;
var StudentInformation;
$.getJSON("./abi/CreateStudent.json", function (result) {
    //console.log(result);
    //console.log(field);
    CreateStudentABI = result;
    var tmp_networks = [];
    for (var i in CreateStudentABI.networks) {
        tmp_networks.push(i);
    }
    //console.log("tmp_networks = " + tmp_networks);
    //console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = CreateStudentABI.networks[tmp_the_correct_network].address;
    CreateStudent = web3.eth.contract(CreateStudentABI.abi).at(address);
    CreateStudent.students(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        StudentInformation = result;
        if (result[0] == "") {
            console.log("registerstudent()");
        } else {
            console.log("editstudent()");
        }
    });
});

var CreateTutorABI;
var CreateTutor;
var TutorInformation;
$.getJSON("./abi/CreateTutor.json", function (result) {
    //console.log(result);
    //console.log(field);
    CreateTutorABI = result;
    var tmp_networks = [];
    for (var i in CreateTutorABI.networks) {
        tmp_networks.push(i);
    }
    console.log("tmp_networks = " + tmp_networks);
    console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = CreateTutorABI.networks[tmp_the_correct_network].address;
    CreateTutor = web3.eth.contract(CreateTutorABI.abi).at(address);
    CreateTutor.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "") {
            console.log("registertutor()");
        } else {
            console.log("edittutor()");
        }
    });
    //createinvoiceform();
});

var GenerateInvoiceABI;
var GenerateInvoice;
$.getJSON("./abi/InvoiceGenerator.json", function (result) {
    //console.log(result);
    //console.log(field);
    GenerateInvoiceABI = result;
    var tmp_networks = [];
    for (var i in GenerateInvoiceABI.networks) {
        tmp_networks.push(i);
    }
    console.log("tmp_networks = " + tmp_networks);
    console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = GenerateInvoiceABI.networks[tmp_the_correct_network].address;
    GenerateInvoice = web3.eth.contract(GenerateInvoiceABI.abi).at(address);
    //One can run functions with the smart contract here because it has finished loading
    UpdateBalance();
    FromInvoiceLookup(0);
    ReciepientInvoiceLookup(0);
    UpdateBalance();
});