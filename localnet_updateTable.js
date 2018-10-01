var FibosClient = require("./localnet_fibos_client.js");

config = {
    fibosAccount: process.env.FIBOS_ACCOUNT,
    fibosPubKey: process.env.FIBOS_PUBKEY,
    fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);
var content = {
     "id": parseInt(process.env.PARAM1, 10),
     "text": process.env.PARAM2,
     "completed": parseInt(process.env.PARAM3, 10)
}
console.log(content)
var res = client.updateTable(process.env.CONTRACT_NAME, content);
console.log(res);

