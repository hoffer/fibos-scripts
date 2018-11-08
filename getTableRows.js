var FibosClient = require("./fibos_client.js");

config = {
	    eosPriKey: process.env.EOS_PRIKEY,
	    eosAccount: process.env.EOS_ACCOUNT,
	    fibosAccount: process.env.FIBOS_ACCOUNT,
	    fibosPubKey: process.env.FIBOS_PUBKEY,
	    fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var res = client.getTableRows(process.env.FIBOS_TARGET_ACCOUNT, process.env.FIBOS_CONTRACT_NAME, process.env.FIBOS_TABLE);
console.log(res);
