var fs = require('fs');
var total = 0;

fs.readFile(process.argv[2], 'utf8', countLines);

function countLines (err, data) {
  if (!err) {
    var totalLines = data.split('\n').length - 1;
    console.log(totalLines);
  };
}