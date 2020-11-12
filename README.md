# can-gauge

### to Run 
on `rp-can-1` (client)

    nodemon client

on `rp-can-2` (server)

    nodemon sse-server

    or

    nodemon websocket-server

browser
    
    http://rp-can-2:3001/sse.html

    or 

    http://rp-can-2:3001/websocket.html


## reference

see Intelliweave.wiki `CANbus Edge Gateway PoC` and `SSE Server Sent Events`

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

these folders are from `rp-can-1` (client) and `rp-can-2` (server)

`/client` master is `rp-can-1\pishare\can-gauge\client`

`/server` master is `rp-can-2\pishare\can-gauge\server`
