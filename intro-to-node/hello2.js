vat http = require('http');

http.createServer(function(request, response) {
  
  response.writeHead(200);
  response.write("App is running");
  
  setTimeout(function(){
    response.write("App is done.");
    response.end();
  }, 5000);

}).listen(8080);