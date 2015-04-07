var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var logger = require('./logger.js');
app.use(logger);
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
  
  var cities = {
  'London': 'UK',
  'Paris': 'France',
  'Rome': 'Italy',
  'Barcelona': 'Spain',
  'Venice': 'Italy',
  'Disneyland': 'USA'};


app.get('/', function(request, response){
  response.render('index');
});

app.get('/cities', function(request, response){
  
  if ( request.query.limit >= 0 ) {
    response.json(cities.slice(0, request.query.limit));
  } else {
    response.json(cities);
  }
});

app.post('/cities', parseUrlencoded, function(request,response){
  var newCity = request.body;
  // console.log("New city is:"+newCity+" Name: "+newCity.name+" Country: "+newCity.country);
  cities[newCity.name] = newCity.country;
  console.log(cities);
  response.status(201);
  response.json(newCity.name);
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
