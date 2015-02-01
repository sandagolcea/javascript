// In our real-time Q&A app, we want to allow each client only one question at a time, 
// but how do we enforce this rule? We can use socket.io's ability to save data on the client, 
// so whenever a question is asked, we first want to check the question_asked value on the client.

// Clients can also answer each other's questions, 
// so let's build that feature by first listening for the 'answer' event on the client, 
// which will send us both the question and answer, 
// which we want to broadcast out to the rest of the connected clients.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer', function(question, answer){
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
  	  client.broadcast.emit('question', question);
   	  client.question_asked = true;
    };
  });
});

server.listen(8080);

// Ansering the questions, methods not implemented:
// <script src="/socket.io/socket.io.js"></script>

// <script>
  // var server = io.connect('http://localhost:8080');

  // server.on('question', function(question) {
    // insertQuestion(question);
  // });
  
  // server.on('answer', function(question, answer){
    // answerQuestion(question, answer);
  // });
  //Don't worry about these methods, just assume 
  //they insert the correct html into the DOM
  // var insertQuestion = function(question) {
  // }

  // var answerQuestion = function(question, answer) {
  // }
// </script>
 

