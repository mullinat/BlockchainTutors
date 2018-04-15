//CreateTutor2Keys has all the fields for tutor information
var CreateTutor2Keys = []
CreateTutor2Keys.push("tutor_name______");
CreateTutor2Keys.push("CapableOfTutorin");
CreateTutor2Keys.push("tutoring_website");
CreateTutor2Keys.push("TutoringIPFSLink");
CreateTutor2Keys.push("tutoring_email__");
//CreateTutor2Keys.push("student_name____");
//CreateTutor2Keys.push("need_tutor_for__");
//CreateTutor2Keys.push("student_email___");

//The tutors are stored in this array once queried from the blockchain
tutors_index = []

//This gets all the tutors from the blockchain and puts them in tutors_index
function index_tutors() {
    SmartContracts["CreateTutor2"].call.current_numbner_of_tutors(function (err, result) {
        //console.log(result.c[0]);
        console.log("INDEX TUTORS HERE");
        for (i = 0; i < result.c[0]; i++) {
            tutors_index[i] = {};
            //TutorContract.tutors_lookup(i, function (err, result) {
            SmartContracts["CreateTutor2"].call.current_numbner_of_tutors(function (err, result) {
                //TutorContract.tutors(result, function (err, result) {
                if (err) {
                    console.log(err);
                }
                console.log(result.c[0]);
                for (var i = 0; i < result.c[0]; i++) {
                    load_tutor(i);
                }
            })
        }
    })
    console.log("index_tutors() Ran Successfully");
    console.log("tutors_index is a list and has all the tutors in the blockchain on it");
}
function load_tutor(_num) {
    var _current_tutor = [];
    for (var i = 0; i < CreateTutor2Keys.length; i++) {
        SmartContracts.BlockAppsData.call.app_data(_num, CreateTutor2Keys[i], function (err, result) {
            console.log(result);
            _current_tutor.push(result);
        })
    }
    tutors_index.push(_current_tutor);
}

//I need to check that this does
function search_tutor() {
    search_tutor_subject(document.getElementById("tutor_search_box").value);
}

//Store which tutors actually tutor what the student wants
vaid_subject_indicies = []

function search_tutor_subject(_search_tutor_string) {
    //console.log("TESTTESTTEST");
    //console.log(tutors_index.length);
    vaid_subject_indicies = []
    for (var i = 0; i < tutors_index.length; i++) {
        //console.log("search_tutor funcrtion should do someththing now...");
        var current_index = tutors_index[i][1].toLowerCase();
        console.log(current_index);
        //console.log("current_index " + current_index);
        if (current_index.includes(_search_tutor_string.toLowerCase())) {
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
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][1] + "</p></div>");
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][2] + "</p></div>");
        $("#search_results").append("<div><p>" + tutors_index[vaid_subject_indicies[i]][3] + "</p></div>");
        $("#search_results").append("<div><p>" + i + "</p></div>")
    }
}