/*
var MyContractABI;
var MyContract;
var TutorInformation;
$.getJSON("./abi/CreateTutor.json", function (result) {
    //console.log(result);
    //console.log(field);
    MyContractABI = result;
    var tmp_networks = [];
    for (var i in MyContractABI.networks) {
        tmp_networks.push(i);
    }
    console.log("tmp_networks = " + tmp_networks);
    console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = MyContractABI.networks[tmp_the_correct_network].address;
    MyContract = web3.eth.contract(MyContractABI.abi).at(address);
    MyContract.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "") {
            registertutor();
        }
        else {
            edittutor();
        }
    });
});
*/
var TutorInformation = []
GetSmartContract("/abi/BlockAppsData.json", "BlockAppsData");
GetSmartContract("/abi/CreateTutor2.json", "CreateTutor2");
GetSmartContract("/abi/CreateStudent2.json", "CreateStudent2");
var tutor_id_number;
function ContractsVariablesDeployed() {
    SmartContracts.BlockAppsData.call.user_id_number(web3.eth.coinbase, function (err, result) {
        tutor_id_number = result.c[0];
        SmartContracts["BlockAppsData"].call.app_data(tutor_id_number, "tutor_name______", function (err, result) {
            //console.log(result);
            //console.log(result[0]);
            if (result != "") {
                TutorInformation.push(result);
                SmartContracts["BlockAppsData"].call.app_data(tutor_id_number, "CapableOfTutorin", function (err, result) { TutorInformation.push(result); })
                SmartContracts["BlockAppsData"].call.app_data(tutor_id_number, "tutoring_website", function (err, result) { TutorInformation.push(result); })
                SmartContracts["BlockAppsData"].call.app_data(tutor_id_number, "TutoringIPFSLink", function (err, result) { TutorInformation.push(result); })
                SmartContracts["BlockAppsData"].call.app_data(tutor_id_number, "tutoring_email__", function (err, result) { TutorInformation.push(result); edittutor(); })
            }
            else {
                registertutor();
            }
        });
    });
}

function registertutor() {
    $.get("./src/html/registertutor.html", function (result) {
        $("body").append(result);
    })
}
var tutor_info_ids = ['tutor_name', 'tutor_subjects', 'tutor_website', 'tutor_IPFS', 'tutor_email']
var tutor_info = [];

//
GetSmartContract("/abi/CreateTutor2.json", "CreateTutor2");
function edittutor() {
    $.get("./src/html/edittutor.html", function (result) {
        $("body").append(result);
        showTutorInformation();
    })
}

function showTutorInformation() {
    $("#showTutorInformation").append("<p>Name : " + TutorInformation[0] + "</p>");
    $("#showTutorInformation").append("<p>Topics of Interest : " + TutorInformation[1] + "</p>");
    $("#showTutorInformation").append("<p>Website : " + TutorInformation[1] + "</p>");
    $("#showTutorInformation").append("<p>IPFS : " + TutorInformation[2] + "</p>");
    $("#showTutorInformation").append("<p>email : " + TutorInformation[3] + "</p>");
}

function CreateTutor() {
    for (var tmp_item in tutor_info_ids) {
        //iterates through the items by number not object
        //console.log(document.getElementById(tutor_info_ids[tmp_item]).value);
        tutor_info.push(document.getElementById(tutor_info_ids[tmp_item]).value);
        document.getElementById(tutor_info_ids[tmp_item]).value = "";
    }
    SmartContracts["CreateTutor2"].call.createNewTutor(tutor_info[0], tutor_info[1], tutor_info[2], tutor_info[3], tutor_info[4], function (err, result) {
        console.log("error is" + err);
        console.log("result is " + result);
        console.log("Information deployed successfully")
    });
}

function UpdateTutor(tmpID) {
    switch (tmpID) {
        case "tutor_name":
            SmartContracts["CreateTutor2"].call.setName(document.getElementById(tmpID).value, function () { console.log("Ummm what now?") });
            break;
        case "tutor_subjects":
            SmartContracts["CreateTutor2"].call.setCapableOfTutoring(document.getElementById(tmpID).value, function () { console.log("Ummm what now?") });
            break;
        case "tutor_website":
            SmartContracts["CreateTutor2"].call.setWebsite(document.getElementById(tmpID).value, function () { console.log("Ummm what now?") });
            break;
        case "tutor_IPFS":
            SmartContracts["CreateTutor2"].call.setIpfsLink(document.getElementById(tmpID).value, function () { console.log("Ummm what now?") });
            break;
        case "tutor_email":
            SmartContracts["CreateTutor2"].call.setEmail(document.getElementById(tmpID).value, function () { console.log("Ummm what now?") });
            break;
        default:
            console.log("Something went wrong");
    }
}
function SmartContractLoaded() {
    SmartContracts["CreateTutor2"].call.tutors(0, function (err, result) { TutorInformation = result });
}