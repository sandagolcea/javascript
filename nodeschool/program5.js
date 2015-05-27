var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  for (var item in list) {
    if ( path.extname(list[item]) == "."+process.argv[3] ) {
      console.log(list[item]);
    }
  }
});