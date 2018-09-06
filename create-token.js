var FibosClient = require("./fibos_client.js");

config = {
	            eosPriKey: process.env.EOS_PRIKEY,
	            eosAccount: process.env.EOS_ACCOUNT,
	            fibosAccount: process.env.FIBOS_ACCOUNT,
	            fibosPubKey: process.env.FIBOS_PUBKEY,
	            fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var res = client.createToken("100000000000.0000 USD", "0.10000000000000000", "10000000000.0000 USD", "5000000000.0000 USD", "500000.0000 FO")
console.log(res);

