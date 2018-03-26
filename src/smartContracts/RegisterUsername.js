var RegisterUsernameABI;
var RegisterUsernameAddress;
var RegisterUsername;
$.getJSON("./abi/RegisterUsername.json", function (result) {
    RegisterUsernameABI = result;
    var tmp_networks = [];
    for (var i in RegisterUsernameABI.networks) {
        tmp_networks.push(i);
    }
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    RegisterUsernameAddress = RegisterUsernameABI.networks[tmp_the_correct_network].address;
    RegisterUsername = web3.eth.contract(RegisterUsernameABI.abi).at(RegisterUsernameAddress);
    //GetUsername();
});