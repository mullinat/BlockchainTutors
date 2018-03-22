var TutorContractABI;
var TutorContract;
$.getJSON("./abi/CreateTutor.json", function (result) {
    //console.log(result);
    //console.log(field);
    TutorContractABI = result;
    var tmp_networks = [];
    for (var i in TutorContractABI.networks){
        tmp_networks.push(i);
    }
    //console.log("tmp_networks = " + tmp_networks);
    //console.log(tmp_networks[tmp_networks.length-1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length-1];
    var address = TutorContractABI.networks[tmp_the_correct_network].address;
    TutorContract = web3.eth.contract(TutorContractABI.abi).at(address);
    TutorContract.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "" ) {
            console.log("registertutor()");
        }
        else{
            console.log("edittutor()");
        }
    });
});
tutors_index = []
function index_tutors(){
    TutorContract.current_numbner_of_tutors( function (err, result){
        //console.log(result.c[0]);
        console.log("INDEX TUTORS HERE");
        for (i = 0; i < result.c[0]; i++) {
            TutorContract.tutors_lookup(i, function (err, result){
                TutorContract.tutors(result, function (err, result){
                    console.log(result);
                    tutors_index.push(result);
                })
            })
        }

    })
    console.log("index_tutors() Ran Successfully");
    console.log("tutors_index is a list and has all the tutors in the blockchain on it");
}

function search_tutor(){
    search_tutor_subject(document.getElementById("tutor_search_box").value);
}
vaid_subject_indicies = []
function search_tutor_subject(search_tutor_subject){
    //console.log("TESTTESTTEST");
    //console.log(tutors_index.length);
    vaid_subject_indicies = []
    for (var i = 0; i < tutors_index.length; i++){
        console.log("search_tutor funcrtion should do someththing now...");
        var current_index  = tutors_index[i][1].toLowerCase();
        console.log("current_index " + current_index);
        if(current_index.includes(search_tutor_subject)){
            console.log("I is equal to " + i);
            vaid_subject_indicies.push(i);
        }
    }
}

function search_tutor(){
    search_tutor_subject(document.getElementById("tutor_search_box").value);
}