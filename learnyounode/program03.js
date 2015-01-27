// This program read a file and outputs the number of lines
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString()

var stringArray = str.split("\n")

console.log(stringArray.length - 1);