console.log(process.argv[2]);
var net = require('net');
var server = net.createServer( function (socket) {
  var data = "";
  date = new Date();
  data += date.getFullYear();
  // data += 
  // "2013-07-06 17:42"
  socket.write(data);
});
server.listen(process.argv[2], function () { console.log('listening on port '+process.argv[2]); });