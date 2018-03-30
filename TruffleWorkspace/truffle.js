var HDWalletProvider = require("truffle-hdwallet-provider");
//MAKE SURE TO PUT YOUR MEMORIC HERE BELOW
var memoric = "I really like pie like pie is totally my favorite food";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 5555,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        //MAKE SURE TO ADD YOUR INFURA ROPSTEN KEY BELOW
        return new HDWalletProvider(memoric, "https://ropsten.infura.io/<YOUR INFURA ROPSTEN KEY>")
      },
      network_id: 3,
      gas: 4700000,
      gasPricce: 100000000000
    } 
  }
};