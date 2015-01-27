var myModule = require('./myModule');

var output = function(error, files){
  if (error) {
    console.log(error);
  }
  else {
    for(i=0; i<files.length; i++) console.log(files[i]);
  }
}

myModule(process.argv[2], process.argv[3], output);
