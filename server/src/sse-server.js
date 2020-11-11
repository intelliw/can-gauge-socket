const can = require('socketcan');
const express = require('express')
const SseStream = require('ssestream')


// can channel listener
const carInfo = {speed: 0, revs: 0};
const channel = can.createRawChannel("can0", true);
channel.addListener("onMessage", function (msg) {
    carInfo.revs = msg.data.readUIntBE(0, 4)
    carInfo.speed = msg.data.readUIntBE(4, 2)
    console.log(carInfo)
})
channel.start()


// web server 
const app = express()
app.use(express.static(__dirname + "/views"));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.get('/sse', (req, res) => {

    // connection open handler
    console.log('new connection')

    // event stream
    const sse = new SseStream.default(req)              // need to use .default
    sse.pipe(res)
    const pusher = setInterval(() => {

        sse.write({
            event: 'carMessage',
            data: carInfo
        })

    }, 100)

    // connection close handler
    res.on('close', () => {
        console.log('lost connection')
        clearInterval(pusher)
        sse.unpipe(res)
    })

})
app.listen(3001, (err) => {
    if (err) throw err
    console.log('server ready on http://rp-can-2:3001')
})
