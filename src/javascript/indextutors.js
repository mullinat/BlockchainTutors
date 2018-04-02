/*
var TutorContractABI;
var TutorContract;
$.getJSON("./abi/CreateTutor.json", function (result) {
    //console.log(result);
    //console.log(field);
    TutorContractABI = result;
    var tmp_networks = [];
    for (var i in TutorContractABI.networks) {
        tmp_networks.push(i);
    }
    //console.log("tmp_networks = " + tmp_networks);
    //console.log(tmp_networks[tmp_networks.length-1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = TutorContractABI.networks[tmp_the_correct_network].address;
    TutorContract = web3.eth.contract(TutorContractABI.abi).at(address);
    TutorContract.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "") {
            console.log("registertutor()");
        } else {
            console.log("edittutor()");
        }
    });
});
*/

GetSmartContract("/abi/BlockAppsData.json", "BlockAppsData");
GetSmartContract("/abi/CreateTutor2.json", "CreateTutor2");
GetSmartContract("/abi/CreateStudent2.json", "CreateStudent2");
tutors_index = []
function index_tutors() {
    //TutorContract.current_numbner_of_tutors(function (err, result) {
    SmartContracts["CreateTutor2"].call.current_numbner_of_tutors(function (err, result) {
        //console.log(result.c[0]);
        console.log("INDEX TUTORS HERE");
        for (i = 0; i < result.c[0]; i++) {
            tutors_index[i] = {};
            //TutorContract.tutors_lookup(i, function (err, result) {
            SmartContracts["CreateTutor2"].call.tutors_lookup(i, function (err, result) {
                //TutorContract.tutors(result, function (err, result) {
                tutors_index[i].address = result;
                /*
                var CreateTutor2Keys = []
                CreateTutor2Keys.push("tutor_name______");
                CreateTutor2Keys.push("CapableOfTutorin");
                CreateTutor2Keys.push("tutoring_website");
                CreateTutor2Keys.push("TutoringIPFSLink");
                CreateTutor2Keys.push("tutoring_email__");
                CreateTutor2Keys.push("student_name____");
                CreateTutor2Keys.push("need_tutor_for__");
                CreateTutor2Keys.push("student_email___");
                */
                SmartContracts["BlockAppsData"].call.user_id_number(tutors_index[i].address, function (err, result) {
                    tutors_index[i].user_id_number = result
                    SmartContracts["BlockAppsData"].call.app_data(tutors_index[i].user_id_number, "tutor_name______", function (err, result) {
                        console.log(result);
                        tutors_index[i]["tutor_name______"] = result;
                    })
                    SmartContracts["BlockAppsData"].call.app_data(tutors_index[i].user_id_number, "CapableOfTutorin", function (err, result) {
                        console.log(result);
                        tutors_index[i]["CapableOfTutorin"] = result;
                    })
                    SmartContracts["BlockAppsData"].call.app_data(tutors_index[i].user_id_number, "tutoring_website", function (err, result) {
                        console.log(result);
                        tutors_index[i]["tutoring_website"] = result;
                    })
                    SmartContracts["BlockAppsData"].call.app_data(tutors_index[i].user_id_number, "TutoringIPFSLink", function (err, result) {
                        console.log(result);
                        tutors_index[i]["TutoringIPFSLink"] = result;
                    })
                    SmartContracts["BlockAppsData"].call.app_data(tutors_index[i].user_id_number, "tutoring_email__", function (err, result) {
                        console.log(result);
                        tutors_index[i]["tutoring_email__"] = result;
                    })
                }
                )
            })
        }
    })
    console.log("index_tutors() Ran Successfully");
    console.log("tutors_index is a list and has all the tutors in the blockchain on it");
}

function search_tutor() {
    search_tutor_subject(document.getElementById("tutor_search_box").value);
}
vaid_subject_indicies = []

function search_tutor_subject(search_tutor_subject) {
    //console.log("TESTTESTTEST");
    //console.log(tutors_index.length);
    vaid_subject_indicies = []
    for (var i = 0; i < tutors_index.length; i++) {
        //console.log("search_tutor funcrtion should do someththing now...");
        var current_index = tutors_index[i][1].toLowerCase();
        console.log(current_index);
        //console.log("current_index " + current_index);
        if (current_index.includes(search_tutor_subject.toLowerCase())) {
            //console.log("I is equal to " + i);
            vaid_subject_indicies.push(i);
        }
    }
}
var display_search_html = '<div class="grid-container" id="search_results"><div>Name</div><div>Website</div><div>IPFS</div ><div>email</div><div>id#</div>'

function search_tutor() {
    search_tutor_subject(document.getElementById("tutor_search_box").value);
    $("#search_results").remove();

    $("#tutor_search").append(display_search_html)
    for (var i = 0; i < vaid_subject_indicies.length; i++) {
        //console.log("I WORKS");
        //console.log(tutors_index[vaid_subject_indicies[i]].length);
        //for (var j = 0; j < tutors_index[vaid_subject_indicies[i]].length - 1; j++) {
        //    console.log("J WORKS")
        //    $("#search_results").append("<div><p>" + tutors_index[i][j] + "</p></div>")
        //}
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][0] + "</p></div>");
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][2] + "</p></div>");
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][3] + "</p></div>");
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][4] + "</p></div>");
        $("#search_results").append("<div><p>" + i + "</p></div>")
    }
}