// copy the content of file 1 into file 2
var fs = require('fs');
var http = require('http');

var file1 = fs.createReadStream("readme.md");
var file2 = fs.createWriteStream("readme_copy.md");

file1.pipe(file2);

http.createServer(function(request, response){
  var file3 = fs.createReadStream("readme_copy.md");
  request.pipe(file3);

  request.on('end', function() {
    response.end('uploaded');
  });
}).listen(8080);

//curl --upload-file file_name.txt http://localhost:8080

