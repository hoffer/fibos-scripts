var FIBOS = require('fibos.js');


var keys = '';
while (true) {
	keys = console.readLine("input the  produce-rname:public-key:private-key! oooo:xxxxx:xxxx\n");
	if (keys) break;
}
keys = keys.split(":");
producername = keys[0];

var config = {
    "chainId": "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    "producer-name": producername,
    "public-key": keys[1],
    "private-key": keys[2],
    "httpEndpoint": "http://ca-rpc.fibos.io:8870",
    "url": "http://bitze.site"
};

var fibos = FIBOS({
    chainId: config["chainId"],
    keyProvider: config["private-key"],
    httpEndpoint: config["httpEndpoint"],
    logger: {
        log: null,
        error: null
    }
});

var ctx = fibos.contractSync("eosio");

ctx.unregprodSync(config["producer-name"]);

