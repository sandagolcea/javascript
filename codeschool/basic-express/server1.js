var express = require('express');
var app = express();

app.get('/tweets', function(request, response){
	response.sendFile(__dirname + '/tweets.html');
}).listen(8080);
console.log("goto port 8080/tweets...");

