//creates a redis client, and puts q1 and q2 in a list of questions
// the lists the questions

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush("questions", question1, function(error,value) {
	console.log(value);
} );

client.lpush("questions", question2, function(error,value) {
	console.log(value);
} );

client.lrange("questions",0,-1,function(err,msg){
  console.log(msg);
});

