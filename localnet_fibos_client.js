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

// "acount", "acount", "100.0000 FO"
this.buyram = function(payer, receiver, value) {
    var self = this;
    var res = self.fibosClient.buyrambytesSync(payer, receiver, value);
    return res;
};

this.sellram = function(receiver, bytes) {
    var self = this;
    var res = self.fibosClient.sellramSync(receiver, bytes)
    return res;
};

this.getRamPrice = function() {
    var self = this;
    var rs = self.fibosClient.getTableRowsSync(true, "eosio", "eosio", "rammarket");
    var a = parseFloat(rs.rows[0].quote.balance.split(" ")[0]);
    var b = parseFloat(rs.rows[0].base.balance.split(" ")[0]);
    var price = a / b * 1024;
    return price + " FO/KB";
};

this.getAccount = function(account) {
    var self = this;
    return self.fibosClient.getAccountSync(account);
};

this.createToken = function(max_supply, weight, max_exchange, reserve_supply, reserve_connector_balance) {
    var self = this;
    var ctx = self.fibosClient.contractSync("eosio.token");
    var res = ctx.excreateSync(self.fibosAccount, max_supply, weight, max_exchange, reserve_supply, reserve_connector_balance, {
        authorization: self.fibosAccount
    });
    return res;
};

this.exchangeToken = function(fromAmount, toAmount, memo) {
    var self = this;
    var ctx = self.fibosClient.contractSync("eosio.token");
    var res = ctx.exchangeSync(self.fibosAccount, fromAmount, toAmount, memo, {
            authorization: self.fibosAccount
        });
    return res;
};

this.destroyToken = function(token) {
    var self = this;
    var ctx = self.fibosClient.contractSync("eosio.token");
    var res = ctx.exdestroySync(token, {
            authorization: self.fibosAccount
        });
    return res;
};

}).call(FibosClient.prototype);
