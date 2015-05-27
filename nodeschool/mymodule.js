var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExt, callback) {
  fs.readdir(dirName, function (err, list) {
    if (err) {
      callback(err);
    } else {
      var filesList = [];
      for (var item in list) {
        if ( path.extname(list[item]) == "."+fileExt ) {
          filesList.push(list[item]);
        };
      }
      callback(null, filesList);
    }
  });
}
