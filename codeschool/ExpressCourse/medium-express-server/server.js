var express = require('express');
var app = express();

var logger = require('./logger.js');
app.use(logger);

app.use(express.static('public'));
  
  // We changed the list of cities
  // var cities = ['London','Paris','Rome','Barcelona','Venice','Disneyland'];
  // into a cities object
  var cities = {
  'London': 'UK',
  'Paris': 'France',
  'Rome': 'Italy',
  'Barcelona': 'Spain',
  'Venice': 'Italy',
  'Disneyland': 'USA'};


app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/cities', function(request, response){
  
  if ( request.query.limit >= 0 ) {
    response.json(cities.slice(0, request.query.limit));
  } else {
    response.json(cities);
  }
});

app.get('/cities/:name', function(request, response){
  var name = request.params.name;
  var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
  
  var description = cities[city];
  if (!description) {
    // 404 city not found
    response.status(404);
    response.json("City not found");
  } else {
    // city found!
    response.json(description);
  }

});

app.listen(8080, function(){console.log("Running on 8080...")});