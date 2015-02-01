//get the redis client data for a question

var redis = require('redis');
var client = redis.createClient();

client.get('question', function(err,data){
	console.log(data);
});
