// This program read a file and outputs the number of lines
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) console.log("Error!");
  else {
    var stringArray = data.split("\n")
    console.log(stringArray.length - 1);
  }
});
