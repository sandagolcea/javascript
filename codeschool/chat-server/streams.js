var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  
  request.pipe(response);
    
  // request.on('readable', function(){
    // var chunk = null;
    // while (null !== (chunk = request.read() ))
      // response.write(chunk);
  // });

  // request.on('end', function(){
  //   response.end();
  // });

}).listen(8080);
console.log("Node is now listening on port 8080");