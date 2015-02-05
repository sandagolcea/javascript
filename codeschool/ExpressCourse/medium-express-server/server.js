var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/cities', function(request, response){
  var cities = ['Shanghai','Paris','Rome','Berlin'];
  response.json(cities);
});

app.listen(8080, function(){console.log("Running on 8080...")});