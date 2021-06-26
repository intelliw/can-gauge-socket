//@ts-check
"use strict";

const can = require('socketcan');
const express = require('express')
const SseStream = require('ssestream')

// CAN listener
const channel = can.createRawChannel("can0", true);
const carInfo = { speed: 0, revs: 0 };
channel.addListener("onMessage", (msg) => {
    carInfo.revs = msg.data.readUIntBE(0, 4)
    carInfo.speed = msg.data.readUIntBE(4, 2)

    console.log(carInfo)
})
channel.start()


// web server 
const app = express()

app.use(express.static(__dirname + "/views"));
app.use('/scripts', express.static(__dirname + '/scripts'));

app.get('/', function(req, res){ res.redirect('/sse-linear.html'); });     //.. default page (http://can-2:3001 returns this)

app.get('/sse', (req, res) => {

    // connection open handler
    console.log('new connection')

    // stream event to browser
    const sse = new SseStream.default(req)
    sse.pipe(res)
    channel.addListener("onMessage", (msg) => {                            // stream eventon CAN message 
        sse.writeMessage({
            event: 'carMessage',
            data : carInfo
        })
    })

    // connection close handler
    res.on('close', () => {
        console.log('lost connection')
        sse.unpipe(res)
    })

})
app.listen(3001, (err) => {
    if (err) throw err
    console.log('server ready on http://can-2:3001')
})

