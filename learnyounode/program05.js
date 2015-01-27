// This program reads a directory(argv[2]) and outputs the files with extension argv[3]
var fs = require('fs');
var path =  require('path');

function grepFiles(error, list) {
  var filteredList = list.filter( function(arg) { 
    var extension="."+process.argv[3];
    return path.extname(arg) == extension;

  });
  for(i=0; i<filteredList.length; i++) console.log(filteredList[i]);
};

fs.readdir(process.argv[2], grepFiles);