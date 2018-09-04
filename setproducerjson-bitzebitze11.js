var FibosClient = require("./fibos_client.js");

config = {
	            eosPriKey: process.env.EOS_PRIKEY,
	            eosAccount: process.env.EOS_ACCOUNT,
	            fibosAccount: process.env.FIBOS_ACCOUNT,
	            fibosPubKey: process.env.FIBOS_PUBKEY,
	            fibosPriKey: process.env.FIBOS_PRIKEY
}

var client = new FibosClient(config);

jsonData = {
    "producer_account_name": "bitzebitze11",
     "producer_public_key": "FO56K4J8eESbLRs4YhmHNF1QsWDySUrvWWJvYWaiTNZyXT8J4aH7",
     "org": {
       "candidate_name": "Bitze",
       "website": "https://bitze.org",
       "ownership_disclosure": "https://bitze.org/ownership_disclosure",
       "code_of_conduct": "https://bitze.org/code_of_conduct",
       "email":"hello@bitze.org",
       "location": {
         "name": "Oregon",
         "country": "US",
         "latitude": 45.5234,
         "longitude": -122.6762
       },
       "social": {
         "steemit": "",
         "twitter": "",
         "youtube": "",
         "facebook": "",
         "github":"",
         "reddit": "",
         "keybase": "",
         "telegram": "",
         "wechat":""
       }
     },
     "nodes": [
       {
         "location": {
            "name": "Oregon",
            "country": "US",
            "latitude": 45.5234,
            "longitude": -122.6762
         },
         "node_type" : "producer"
       }
     ]
   }


var res = client.setproducerjson(jsonData);
console.log(res);

