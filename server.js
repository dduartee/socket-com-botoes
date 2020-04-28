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
        console.log('valor: ' + msg);
    });

});

http.listen(3000, function(){
  console.log('Rodando na porta *:3000');
});