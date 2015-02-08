var express = require('express');
var app = express();

var logger = require('./logger.js');
app.use(logger);

app.use(express.static('public'));


app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/cities', function(request, response){
  var cities = ['London','Paris','Rome','Barcelona','Venice','Disneyland'];
  response.json(cities);
});

app.listen(8080, function(){console.log("Running on 8080...")});