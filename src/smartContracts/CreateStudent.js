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