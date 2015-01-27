var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello world!');
  response.end();
}).listen(8000);


console.log('> http server has started on port 8000');


// Code explained:
    // // requires node's http module
    // var http = require('http');

    // // creates a new httpServer instance
    // http.createServer(function (request, response) {
      
    //   // this is the callback, or request handler for the httpServer
      
    //   // respond to the browser, write some headers so the 
    //   // browser knows what type of content we are sending
    //   response.writeHead(200, {'Content-Type': 'text/plain'});
      
    //   // write some content to the browser that your user will see
    //   response.write('Hello world!')
      
    //   // close the response
    //   response.end();
      
    // }).listen(80); // the server will listen on port 80
