var BlockAppsDataABI;
var BlockAppsData;
$.getJSON("./abi/BlockAppsData.json", function (result) {
    //console.log(result);
    //console.log(field);
    BlockAppsDataABI = result;
    var tmp_networks = [];
    for (var i in BlockAppsDataABI.networks) {
        tmp_networks.push(i);
    }
    console.log("tmp_networks = " + tmp_networks);
    console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var address = BlockAppsDataABI.networks[tmp_the_correct_network].address;
    BlockAppsData = web3.eth.contract(BlockAppsDataABI.abi).at(address);
    /*BlockAppsData.tutors(web3.eth.coinbase, function (err, result) {
        //console.log(result);
        //console.log(result[0]);
        TutorInformation = result;
        if (result[0] == "") {
            console.log("registertutor()");
        } else {
            console.log("edittutor()");
        }
    });*/
    //createinvoiceform();
});