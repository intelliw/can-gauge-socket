# can-gauge

### to Run 
on `rp-can-1` (client)
    
    - run canbus generator (client)

        nodemon client

on `rp-can-2` (server)

    - run canbus listener and sse streamer (serve sent events) server 

        nodemon sse

    or websocket server

        nodemon ws

on `browser`
    
    http://rp-can-2:3001/sse.html
    http://rp-can-2:3001/sse-radial.html

    or 

    http://rp-can-2:3000/websocket-radial.html


## reference

see Intelliweave.wiki `CANbus Edge Gateway PoC` and `SSE Server Sent Events`
    Canvas Gauges
        https://canvas-gauges.com/
    
    Server Sent Events 
        SseStream         https://github.com/EventSource/node-ssestream

    Rhys Morgan NodeJS video tutorial
        
        https://www.moderndaymods.com/2020/01/26/building-a-canbus-app-part1/
        
        github
            https://github.com/rhysmorgan134/Can-App
        videos
            https://www.youtube.com/channel/UC69PLXXfDEmxNXQXY63ff_w
            1 client    - https://www.youtube.com/watch?v=h8JVC13S66g
            2 server    - https://www.youtube.com/watch?v=WO5hGacDnpA
            3 app       - https://www.youtube.com/watch?v=nuINYdLGgv8

# shared files

- `\can-gauge` contains the main git repo

- these remote folders are for running the respective sub-folder replicas of `\can-gauge` 
    
    - `/client` master is `rp-can-1\pishare\can-gauge\client`

    - `/server` master is `rp-can-2\pishare\can-gauge\server`

    - `/gateway` master is `rp-can-3\pishare\can-gauge\gateway`

note: gateway is TBD
        