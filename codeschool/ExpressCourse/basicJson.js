var express = require('express');
var app = express();

app.get('/locations', function(request,response){
	cities = ['Caspiana','Indigo','Paradise'];
  response.send(cities);
});
app.listen(3001, function() { 
  console.log("Running Express");
});
