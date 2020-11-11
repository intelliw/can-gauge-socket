// move this to server/src folder to test
const express = require('express')
const serveStatic = require('serve-static')
const SseStream = require('ssestream')

const app = express()
app.use(serveStatic(__dirname))
app.get('/sse', (req, res) => {
  console.log('new connection')

  const sseStream = new SseStream.default(req)
  sseStream.pipe(res)
  const pusher = setInterval(() => {
    sseStream.write({
      event: 'server-time',
      data: new Date().toTimeString()
    })
  }, 1000)

  res.on('close', () => {
    console.log('lost connection')
    clearInterval(pusher)
    sseStream.unpipe(res)
  })
})

app.listen(3002, (err) => {
  if (err) throw err
  console.log('server ready on http://rp-can-2:3002')
})
