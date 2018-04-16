var StudentInformation;
/*
var MyContractABI;
var MyContract;
var StudentInformation;
$.getJSON("./abi/CreateStudent.json", function (result) {
    //console.log(result);
    //console.log(field);
    MyContractABI = result;
    var tmp_networks = [];
    for (var i in MyContractABI.networks) {
        tmp_networks.push(i);
    }
    //console.log("tmp_networks = " + tmp_networks);
    //console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = MyContractABI.networks[tmp_the_correct_network].address;
    //var address = MyContractABI.networks[3].address
    MyContract = web3.eth.contract(MyContractABI.abi).at(address);
    MyContract.students(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        StudentInformation = result;
        if (result[0] == "") {
            registerstudent();
        } else {
            editstudent();
        }
    });
});
*/
//registerstudent();
//editstudent();


var student_id_number;
var StudentInformation = [];
function START_UI() {
    SmartContracts.BlockAppsData.call.user_id_number(web3.eth.coinbase, function (err, result) {
        student_id_number = result.c[0];
        if (result.c[0] == "") {
            registerstudent();
        }
        else {
            SmartContracts.BlockAppsData.call.app_data(student_id_number, "student_name____", function (err, result) {
                console.log(result);
                StudentInformation.push(result);
            })
            SmartContracts.BlockAppsData.call.app_data(student_id_number, "need_tutor_for__", function (err, result) {
                console.log(result);
                StudentInformation.push(result);
            })
            SmartContracts.BlockAppsData.call.app_data(student_id_number, "student_email___", function (err, result) {
                console.log(result);
                StudentInformation.push(result);
                editstudent();
            })
        }
    });

}

function editstudent() {
    $.get("./src/html/editstudent.html", function (result) {
        $("body").append(result);
        showStudentInformation();
    })
}

function showStudentInformation() {
    $("#existingStudentInformation").append("<p>Name : " + StudentInformation[0] + "</p>");
    $("#existingStudentInformation").append("<p>Topics of Interest : " + StudentInformation[2] + "</p>");
    $("#existingStudentInformation").append("<p>email : " + StudentInformation[3] + "</p>");
}

function registerstudent() {
    $.get("./src/html/registerstudent.html", function (result) {
        $("body").append(result);
    })
}

var student_info_ids = ['student_name', 'student_subjects', 'student_email']
var student_info = [];

function CreateStudent() {
    for (var tmp_item in student_info_ids) {
        //iterates through the items by number not object
        //console.log(document.getElementById(student_info_ids[tmp_item]).value);
        student_info.push(document.getElementById(student_info_ids[tmp_item]).value);
        document.getElementById(student_info_ids[tmp_item]).value = "";
    }
    MyContract.createNewStudent(student_info[0], student_info[1], student_info[2], function () {
        console.log("Information deployed successfully")
    });
}

function UpdateStudent(tmpID) {
    switch (tmpID) {
        case "student_name":
            SmartContracts.BlockAppsData.call.add_user_data("student_name____", document.getElementById(tmpID).value, function () {
                console.log("Ummm what now?")
            });
            break;
        case "student_subjects":
            SmartContracts.BlockAppsData.call.add_user_data("need_tutor_for__", document.getElementById(tmpID).value, function () {
                console.log("Ummm what now?")
            });
            break;
        case "student_email":
            SmartContracts.BlockAppsData.call.add_user_data("student_email___", document.getElementById(tmpID).value, function () {
                console.log("Ummm what now?")
            });
            break;
        default:
            console.log("Something went wrong");
    }
}
var find_tutor_displayed = false;

function find_a_tutor() {
    //console.log("find_a_tutor function");
    $.get("/src/html/findatutor.html", function (result) {
        //console.log(result);
        if (find_tutor_displayed == false) {
            $("#tutor_search").append(result);
            find_tutor_displayed = true;
        }
    })
}


//GetSmartContract("/abi/CreateStudent.json", "CreateStudent");
//Import the important smart contracts
GetSmartContract("/abi/BlockAppsData.json", "BlockAppsData");
GetSmartContract("/abi/CreateTutor2.json", "CreateTutor2");
GetSmartContract("/abi/CreateStudent2.json", "CreateStudent2", true);