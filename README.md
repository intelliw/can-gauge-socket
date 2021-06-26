# can-gauge

### to Run 
on `can-1` (client)
    
    - run canbus generator (client)

        nodemon client

on `can-2` (server)

    - run canbus listener and sse streamer (serve sent events) server 

        nodemon sse

    or websocket server

        nodemon ws

on `browser`
    
    http://can-2:3001/sse.html
    http://can-2:3001/sse-radial.html

    or 

    http://can-2:3000/websocket-radial.html


## reference

see Intelliweave.wiki `CANbus Edge Gateway PoC` and `SSE Server Sent Events`
    Canvas Gauges
        https://canvas-gauges.com/
    
    Server Sent Events 
        SseStream         https://github.com/EventSource/node-ssestream



# shared files

- `\can-gauge` contains the main git repo

- these remote folders are for running the respective sub-folder replicas of `\can-gauge` 
    
    - `/client` master is `can-1\share\can-gauge\client`

    - `/server` master is `can-2\share\can-gauge\server`

    - `/gateway` master is `can-3\share\can-gauge\gateway`

note: gateway is TBD
        