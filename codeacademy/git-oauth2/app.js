var express = require('express');

var app = express.createServer();
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: APP_SECRET}));
  app.use('view engine','jade');
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler());
});

app.get('/',function(req,res) {
  res.render('home');
});

app.listen(4000);