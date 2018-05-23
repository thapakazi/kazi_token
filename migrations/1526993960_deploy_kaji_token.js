var KaziToken = artifacts.require("./KaziToken.sol");

module.exports = function(deployer) {
  deployer.deploy(KaziToken);
};
