var FibosClient = require("./localnet_fibos_client.js");

config = {
    fibosAccount: process.env.FIBOS_ACCOUNT,
    fibosPubKey: process.env.FIBOS_PUBKEY,
    fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var res = client.createAccount(process.env.FIBOS_TO_ACCOUNT_NAME, process.env.FIBOS_TO_ACCOUNT_PUBKEY);
console.log(res);

