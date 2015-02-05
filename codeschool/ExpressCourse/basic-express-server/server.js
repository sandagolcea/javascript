var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);

var port = 8080 ;

app.get('/', function(request,response){
  response.write("hello world");
  response.end();
});

app.get('/cities', function(request, response){
  var cities = ["Paris","Madrid","Lisbon","Rome"];
  response.json(cities);// the same result with :response.send(cities);
});

// redirection example:
app.get('/redirection', function(request,response){
  response.redirect('/cities');
});

server.listen(port, function(){console.log("Listening on port 8080")});