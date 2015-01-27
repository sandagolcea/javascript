
var fs = require('fs');

var readFile = function (dirPath, ext, filtering){
  var files = fs.readdir(dirPath, function(error, list){
    if (error)
      console.log("Error!");
    else
      filtering(null, list);
  });
};

module.exports.readFile = readFile;
