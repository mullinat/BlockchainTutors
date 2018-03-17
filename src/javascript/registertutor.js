var address = '0x3913a50ef1881417e3c73ccb8d1caa9b9d5c6d7a';
var MyContractABI;
var MyContract;
var TutorInformation;
$.getJSON("./abi/CreateTutor.json", function (result) {
    //console.log(result);
    //console.log(field);
    MyContractABI = result;
    MyContract = web3.eth.contract(MyContractABI.abi).at(address);
    MyContract.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "" ) {
            registertutor();
        }
        else{
            edittutor();
        }
    });
});
function edittutor() {
    $.get("./src/html/edittutor.html", function (result) {
        $("body").append(result);
        showTutorInformation();
    })
}
function showTutorInformation(){
    $("#showTutorInformation").append("<p>Name : " + TutorInformation[0] + "</p>");
    $("#showTutorInformation").append("<p>Topics of Interest : " + TutorInformation[1] + "</p>");
    $("#showTutorInformation").append("<p>Website : " + TutorInformation[2] + "</p>");
    $("#showTutorInformation").append("<p>IPFS : " + TutorInformation[3] + "</p>");
    $("#showTutorInformation").append("<p>email : " + TutorInformation[4] + "</p>");
}

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

function UpdateTutor(tmpID){
    switch(tmpID){
        case "tutor_name":
            MyContract.setName(document.getElementById(tmpID).value, function(){console.log("Ummm what now?")});
            break;
        case "tutor_subjects":
            MyContract.setCapableOfTutoring(document.getElementById(tmpID).value, function(){console.log("Ummm what now?")});
            break;
        case "tutor_website":
            MyContract.setWebsite(document.getElementById(tmpID).value, function(){console.log("Ummm what now?")});
            break;
        case "tutor_IPFS":
            MyContract.setIpfsLink(document.getElementById(tmpID).value, function(){console.log("Ummm what now?")});
            break;
        case "tutor_email":
            MyContract.setEmail(document.getElementById(tmpID).value, function(){console.log("Ummm what now?")});
            break;
        default:
            console.log("Something went wrong");
    }
}