http = require('http');

http.get(process.argv[2], function (response) {
  var buf = "";
  response.on('data', function (data) {
    buf += data;
  });
  response.on('end', function () {
    console.log(buf.length);
    console.log(buf);
  })
});
