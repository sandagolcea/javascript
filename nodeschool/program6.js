var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], printing);

function printing (err, data) {
  if (err) {
    console.log('Houston we have a problem: '+ err);
  } else {
    data.forEach(function (file) {
      console.log(file);
    });
  }
}
