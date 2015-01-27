var myModule = require('./program06_module');
var path = require('path');


var filtering = function(error, files){
  var filteredList = files.filter( function(arg) { 
    var extension="."+process.argv[3];
    return path.extname(arg) == extension;
  });
  for(i=0; i<filteredList.length; i++) console.log(filteredList[i]);
}

myModule.readFile(process.argv[2], process.argv[3], filtering);