var CreateTutor = artifacts.require("CreateTutor.sol");
var CreateStudent = artifacts.require("CreateStudent.sol");
var InvoiceGenerator = artifacts.require("InvoiceGenerator.sol");
var AddSkype = artifacts.require("AddSkype.sol");

module.exports = function (deployer) {
  deployer.deploy(CreateTutor);
  deployer.deploy(CreateStudent);
  deployer.deploy(AddSkype);
  deployer.deploy(InvoiceGenerator);
};