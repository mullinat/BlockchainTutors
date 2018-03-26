var GenerateInvoiceABI;
var GenerateInvoiceAddress;
var GenerateInvoice;
$.getJSON("./abi/InvoiceGenerator.json", function (result) {
    GenerateInvoiceABI = result;
    var tmp_networks = [];
    for (var i in GenerateInvoiceABI.networks) {
        tmp_networks.push(i);
    }
    //console.log("tmp_networks = " + tmp_networks);
    //console.log(tmp_networks[tmp_networks.length - 1]);
    var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
    var GenerateInvoiceAddress = GenerateInvoiceABI.networks[tmp_the_correct_network].address;
    GenerateInvoice = web3.eth.contract(GenerateInvoiceABI.abi).at(GenerateInvoiceAddress);
});