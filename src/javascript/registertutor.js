var address = '0xdc732ffe9e3bc213236210b24261c2919b49d527';
var MyContractABI;
var MyContract;
$.getJSON("./abi/CreateTutor.json", function (result) {
    //console.log(result);
    //console.log(field);
    MyContractABI = result;
    MyContract = web3.eth.contract(MyContractABI.abi).at(address);
    MyContract.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        if (result[0] == "" ) {
            registertutor();
        }
        else{
            console.log("Create function to edit information already on the blockchain")
        }
    });
});

function registertutor() {
    $.get("./src/html/registertutor.html", function (result) {
        $("body").append(result);
    })
}

var tutor_info_ids = ['tutor_name', 'tutor_subjects', 'tutor_website', 'tutor_IPFS', 'tutor_email']
var tutor_info = [];

function CreateTutor() {
    for (var tmp_item in tutor_info_ids) {
        //iterates through the items by number not object
        //console.log(document.getElementById(tutor_info_ids[tmp_item]).value);
        tutor_info.push(document.getElementById(tutor_info_ids[tmp_item]).value);
        document.getElementById(tutor_info_ids[tmp_item]).value = "";
    }
    MyContract.createNewTutor(tutor_info[0], tutor_info[1], tutor_info[2], tutor_info[3], tutor_info[4], function () {
        console.log("Information deployed successfully")
    });
}