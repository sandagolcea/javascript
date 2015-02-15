var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var mongoose = require('mongoose');
require('./kitties');

app.get('/',function (request, response) {
  
  var Kitten = mongoose.model('Kitten');

  var felix = new Kitten({ name: 'felix' })
  console.log("My new kitty is: "+felix.name) 

  var fluffy = new Kitten({ name: 'fluffy' });
  console.log("My new kitty is: "+fluffy.name) 
  
  console.log("Saving felix in the database");

  felix.save(function (err, felix) {
    if (err) return console.error(err);
    felix.speak();
  });
  
  console.log('\nMy kittens are:');
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });
  console.log('\nSearch results:');
  Kitten.find({ name: /^fel/ }, function (err, cat) {
    if (err) return console.error(err);
    console.log(cat);
  });

  response.send("Hello world");
});

server.listen(8080,function(){console.log("App listening on port 8080..")});