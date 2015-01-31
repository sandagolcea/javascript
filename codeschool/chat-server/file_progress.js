var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
  var file3 = fs.createReadStream("readme_copy.md");
  
  var fileBytes = request.headers['content-length'];
  var uploadedBytes = 0;

  request.on('readable', function(){
    var chunk = null ; 
    while( ( chunk = request.read() ) !== null) {
      uploadedBytes += chunk.length;
      var progress = (uploadedBytes / fileBytes) * 100; 
      response.write("progress: " + parseInt(progress, 10) + "%\n");
    }
  });

  request.pipe(file3);

  request.on('end', function() {
    response.end('uploaded');
  });
}).listen(8080);

//curl --upload-file bigFile.txt http://localhost:8080