var FibosClient = require("./fibos_client.js");

config = {
	            eosPriKey: process.env.EOS_PRIKEY,
	            eosAccount: process.env.EOS_ACCOUNT,
	            fibosAccount: process.env.FIBOS_ACCOUNT,
	            fibosPubKey: process.env.FIBOS_PUBKEY,
	            fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var res = client.destroyToken("0.0000 USD@hoffercqtest")
console.log(res);

