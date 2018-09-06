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
       "website": "http://bitze.site",
       "email":"hello@bitze.site",
       "location": {
         "name": "Oregon",
         "country": "US",
         "latitude": 45.5234,
         "longitude": -122.6762
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
       },
       {
         "location": {
             "name": "Oregon",
             "country": "US",
             "latitude": 45.5234,
             "longitude": -122.6762
          },
         "node_type" : "seed",
         "p2p_endpoint": "seed.bitze.site:9870"
       }
     ]
   }


var res = client.setproducerjson(jsonData);
console.log(res);

