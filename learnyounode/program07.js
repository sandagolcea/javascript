
http = require('http');

callback = function(response) {
  var str = '';

  response.on('data', function(chunk) {
    console.log(chunk.toString());
  });
}

http.get(process.argv[2], callback);
