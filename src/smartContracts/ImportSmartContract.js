var SmartContract = { name: "", abi: "", address: "", call: "" }
var SmartContracts = [];
//var GenerateInvoiceABI;
//var GenerateInvoiceAddress;
//var GenerateInvoice;
function GetSmartContract(_location, _name) {
    $.getJSON(_location, function (result) {
        //GenerateInvoiceABI = result;
        SmartContracts.push(SmartContract);
        SmartContracts[SmartContracts.length - 1].abi = result;
        var tmp_networks = [];
        for (var i in SmartContracts[SmartContracts.length - 1].abi.networks) {
            tmp_networks.push(i);
        }
        SmartContracts[SmartContracts.length - 1].name = _name;
        //console.log("tmp_networks = " + tmp_networks);
        //console.log(tmp_networks[tmp_networks.length - 1]);
        var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
        console.log(SmartContracts[SmartContracts.length - 1].abi)
        SmartContracts[SmartContracts.length - 1].address = SmartContracts[SmartContracts.length - 1].abi.networks[tmp_the_correct_network].address;
        SmartContracts[SmartContracts.length - 1].call = web3.eth.contract(SmartContracts[SmartContracts.length - 1].abi.abi).at(SmartContracts[SmartContracts.length - 1].address);
    });
}