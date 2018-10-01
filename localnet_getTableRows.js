var FibosClient = require("./localnet_fibos_client.js");

config = {
    fibosAccount: process.env.FIBOS_ACCOUNT,
    fibosPubKey: process.env.FIBOS_PUBKEY,
    fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var res = client.getTableRows(process.env.FIBOS_ACCOUNT, process.env.CONTRACT_NAME, process.env.TABLE);
console.log(res);

