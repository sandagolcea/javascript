var fs = require('fs');
var path = require('path');

var readFile = function (dirPath, ext, callback){
  var files = fs.readdir(dirPath, function(error, list){
    if (error)
      return callback(error);
    else
      var data = list.filter( function(arg) { 
        return path.extname(arg) == ("."+ext);
      });
      callback(null, data);
  });
};

module.exports = readFile;
