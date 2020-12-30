const SPEED_MAX = 155;
const SPEED_INCREMENT = 1;

const REVS_MAX = 7000;
const REVS_INCREMENT = 200;
const INTERVAL_MS = 150;

var can = require("socketcan");

var channel = can.createRawChannel('can0', true);

var msg = {
    'id': 500,
    data: [0,0,0,0,0,0,0,0]
}

var speed = 0
var revs = 0
var up = true

setInterval(() => {
    var out = {}
    var buff = Buffer.alloc(8)

    // accelerate 
    if(speed < SPEED_MAX) {
        speed += SPEED_INCREMENT
        revs += REVS_INCREMENT
    
    // top speed, bounce revs
    } else {
        if(up) {
            revs = revs + 100
            up = false
        } else {
            revs = revs - 100
            up = true
        }
    }

    if (revs > REVS_MAX) {
        revs = 1000
    }
    
    buff.writeUIntBE(revs, 0, 4)
    buff.writeUIntBE(speed, 4, 2)

    console.log(buff)
    out.id = msg.id
    out.data = buff

    channel.send(out)
}, INTERVAL_MS)











channel.start()