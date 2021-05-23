var Unbox = artifacts.require ("Unbox.sol");

module.exports = function (deployer) {
    deployer.deploy (Unbox);
};

 Unbox.deployed().then((instance)=>{app = instance;});
