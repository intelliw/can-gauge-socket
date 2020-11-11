var can = require('socketcan');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var channel = can.createRawChannel("can0", true);

var carInfo = {};
carInfo.speed = 0
carInfo.revs = 0


app.use(express.static(__dirname + "/views"));
app.use('/scripts', express.static(__dirname + '/scripts'));


// connection open handler
io.on('connection', function(client) {
    console.log('client connected')
})


// event stream
setInterval(() => {
    io.emit('carMessage', carInfo)
}, 100)


// can channel listener
channel.addListener("onMessage", function(msg) { 
    carInfo.revs = msg.data.readUIntBE(0, 4)
    carInfo.speed = msg.data.readUIntBE(4, 2)
    console.log(carInfo)
})
channel.start()

// websocket listener
server.listen(3000)