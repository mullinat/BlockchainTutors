var RegisterUsername = artifacts.require("RegisterUsername.sol");
var CreateTutor = artifacts.require("CreateTutor.sol");
var CreateStudent = artifacts.require("CreateStudent.sol");
var InvoiceGenerator = artifacts.require("InvoiceGenerator.sol");
var BlockAppsData = artifacts.require("BlockAppsData.sol");
var CreateTutor2 = artifacts.require("CreateTutor2.sol");
var CreateStudent2 = artifacts.require("CreateStudent2.sol");

module.exports = function (deployer) {
  deployer.deploy(RegisterUsername, "Username TEST");
  deployer.deploy(CreateTutor);
  deployer.deploy(CreateStudent);
  deployer.deploy(InvoiceGenerator);
  deployer.deploy(BlockAppsData, web3.eth.accounts[0]);
  deployer.deploy(CreateTutor2, web3.eth.accounts[0]);
  deployer.deploy(CreateStudent2, web3.eth.accounts[0]);
  
};