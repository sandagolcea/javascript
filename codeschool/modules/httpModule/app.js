var http = require('http');

var options = {
  host: 'localhost', port: 8080, path: '/', method: 'POST'
}
var makeRequest = function(message){

  var request = http.request(options, function(response){
    response.on('data', function(data){
      console.log(data);
    });
  });

  request.write(message);
  request.end();
}


// makeRequest("Here's looking at you, kid.");
module.exports = makeRequest();