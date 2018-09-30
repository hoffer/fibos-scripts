var FibosClient = require("./localnet_fibos_client.js");


var client = new FibosClient();
var res = client.generateKeys()
console.log(res);

