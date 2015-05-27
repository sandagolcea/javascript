var fs = require('fs');

// console.log(process.argv[2]);

var fileContent = fs.readFileSync(process.argv[2]);
var str = fileContent.toString();
var totalLines = str.split('\n').length - 1;
console.log(totalLines);
