var http = require('http');
var https = require('https');
var fs = require('fs');

http.createServer(function (request, response) { 

    // https.globalAgent.options.secureProtocol = 'SSLv3_method';

    // var options = {
    //   hostname: 'https://api.github.com',
    //   port: 443,
    //   path: '/users/sandagolcea',
    //   method: 'GET',
    //   headers:
    //     {
    //         'User-Agent': 'sandagolcea',
    //         'Accept': '*/*'
    //         'Host': 'api.github.com'
    //     }
    // };

    // var req = https.get(options, function(gitHubResponse) {
    //     console.log('HEADERS: ' + JSON.stringify(gitHubResponse.headers));
    //     gitHubResponse.setEncoding('utf8');
    //     gitHubResponse.on('data', function (chunk) {
    //         console.log('BODY: ' + chunk);
    //     });
    // });

    // req.on('error', function(e) {
    //   console.log('problem with request: ' + e.message);
    // });


    fs.readFile('../views/index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        http.createServer(function(request, response) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        }).listen(8000);
    });


    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write("yes");
    // response.render('index');
    response.end();
}).listen(8000);

console.log('> http server has started on port 8000');


/*
var http = require('http');

var options = {
  hostname: 'www.google.com',
  port: 80,
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('headers:\n' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('body:\n' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
req.end();
*/
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
