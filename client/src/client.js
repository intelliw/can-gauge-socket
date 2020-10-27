const utils = require('./utils');

const can = require("socketcan");
const channel = can.createRawChannel('can0', true);

const INTERVAL = 100;                                                       // ms
const MSG_ID = 500;

const MSG_BYTES = 8;                                                      // num bytes

const canMsg = { id: MSG_ID, data: Buffer.alloc(MSG_BYTES) };

var revs = { value: 0, offset: 0, byteLength: 4, increment: 240, quiver: 100 };
var speed = { value: 0, offset: 4, byteLength: 2, max: 155, increment: 1 };
var up = true;

setInterval(() => {

    // speed and revs
    if (speed.value < speed.max) {
        speed.value += speed.increment;
        revs.value += revs.increment;

    } else {
        revs.value = up ? revs.value + revs.quiver : revs.value - revs.quiver;
        up = !up
    }
    revs.value = revs.value > 7000 ? 1000 : revs.value;

    // add the data
    canMsg.data = Buffer.alloc(MSG_BYTES)
    canMsg.data.writeUIntBE(revs.value, revs.offset, revs.byteLength);
    canMsg.data.writeUIntBE(speed.value, speed.offset, speed.byteLength);
    
    // output to console and channel
    console.log(canMsg.data);
    channel.send(canMsg)

}, INTERVAL)











channel.start()