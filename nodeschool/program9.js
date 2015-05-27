http = require('http');
async = require('async');

links = [process.argv[2], process.argv[3], process.argv[4]];

var getLinks = function(index) {
  if ( index !== links.length ) {
    http.get(links[index], function (response) {
      var buf = "";
      response.on('data', function (data) {
        buf += data;
      });
      response.on('end', function (callback) {
        console.log(buf);
        getLinks(index + 1);
      });
    });
  };
};

getLinks(0);
