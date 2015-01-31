var fs = require('fs');
var file = fs.createReadStream('fruits.txt');

file.on('readable',function(){
  while( (chunk = file.read() ) !== null ){
    console.log(chunk.toString());
  }
});

// this is the same as:
// file.pipe(process.stdout);