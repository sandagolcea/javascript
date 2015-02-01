//create a redis client with my name propery eq my name
var redis=require('redis');
var client = redis.createClient();

client.set("name", "Sanda");
