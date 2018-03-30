var HDWalletProvider = require("truffle-hdwallet-provider");
var privateKey = "I PUT MY PRIVATE KEY IN A PUBLIC REPO LMAFO";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 5555,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<INFURA_Access_Token>")
      },
      network_id: 3
    } 
  }
};