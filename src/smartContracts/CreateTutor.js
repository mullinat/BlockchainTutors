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