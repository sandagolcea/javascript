var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
	console.log("onnected");
});

server.listen(8080);

