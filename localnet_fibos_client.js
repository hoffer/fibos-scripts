var FIBOS = require("fibos.js");
var cfg = require("./localnet_config.js");
var http = require('http');

var FibosClient = module.exports = function(config){
    this.init(config);
};

(function(){

this.init = function(config) {
    var self = this;
    
    self.fibosAccount = config && config.fibosAccount;
    self.fibosPubKey = config && config.fibosPubKey;
    self.fibosPriKey = config && config.fibosPriKey;
    
    self.fibosClient = FIBOS({
        chainId: cfg.fibos_chainid,
        keyProvider: self.fibosPriKey,
        httpEndpoint: cfg.fibos_endpoint,
        verbose: false,
        logger: {
            log: null,
            error: null
        }
    });
}

this.generateKeys = function() {
    var self = this;
    var prikey = FIBOS.modules.ecc.randomKeySync(); //私钥
    var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥

    return {pubkey: pubkey, prikey: prikey}
};

this.createAccount = function(newAccount, newAccountPubkey) {
    var self = this;
    var res = self.fibosClient.newaccountSync({
	creator: 'eosio',
        name: newAccount,
        owner: newAccountPubkey,
        active: newAccountPubkey
    });
    console.log('create account successfully');
    return res;
};

this.getTableRows = function(owner, contractName, tableName) {
    var self = this;
    var res = self.fibosClient.getTableRowsSync({
	    "scope": owner,
	    "code": contractName,
	    "table": tableName,
	    "json": true});
    return res;
};

this.updateTable = function(contractName, content) {
    var self = this;
    var ctx = self.fibosClient.contractSync(contractName);
    var res = ctx.updateSync(content,{
          "authorization": self.fibosAccount
        });
    return res;
};

}).call(FibosClient.prototype);
