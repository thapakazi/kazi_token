var kazi_token = artifacts.require("./KaziToken.sol");

contract('KaziToken', function(accounts) {
    it("sets total supply upon deployment", function() {
	return intance = kazi_token.deployed()
	    .then(function(instance){
		tokenInstance = instance;
		return tokenInstance.totalSupply();
	    })
	    .then(function(totalSupply){
		assert.equal(totalSupply.toNumber(), 1000, 'sets the inital total supply to 1000')
	    });
    });
});
