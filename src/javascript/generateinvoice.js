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
    createinvoiceform();
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
    /*GenerateInvoice.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "") {
            console.log("condition zero");
        } else {
            console.log("non zero");
        }
    });*/
});

function createinvoiceform() {
    $.get("./src/html/createinvoiceform.html", function (result) {
        $("body").append(result);
        CreateTutor.tutors(web3.eth.coinbase, function (err, result) {
            if (result[0] == "") {
                $('#their_name').text("Looks like you are not registered");
            } else {
                $('#their_name').text("Your registered name is " + result[0]);
            }
        })
    })
}

var invoice_to;
var invoice_amount;
var invoice_note;

function GatherInvoiceData() {
    invoice_to = $('#invoice_to').val();
    invoice_amount = $('#invoice_amount').val();
    invoice_note = $('#invoice_note').val();
}