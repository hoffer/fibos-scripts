var FibosClient = require("./fibos_client.js");

config = {
	            eosPriKey: process.env.EOS_PRIKEY,
	            eosAccount: process.env.EOS_ACCOUNT,
	            fibosAccount: process.env.FIBOS_ACCOUNT,
	            fibosPubKey: process.env.FIBOS_PUBKEY,
	            fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var res = client.exchangeToken("1.0000 FO@eosio", "0.0000 USD@hoffercqtest", "exchange FO to USD");
console.log(res);

