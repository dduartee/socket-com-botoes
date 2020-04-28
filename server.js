var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

    socket.on('valor', function(msg){
        io.emit('valor', msg);
        socket.broadcast.emit('valor', msg); 
        console.log('message: ' + msg);
    });

});

http.listen(7777, function(){
  console.log('Rodando na porta 7777');
});