    
    INSTALL TypeScript globally
        npm install -g typescript

    LOOCK which version is installed
        tsc -v
C9
    GENERATE package.json
        npm init
        (press Enter to every default option)
C10
    COPY server.ts from course to src/server directory
    
    GENERATE package-lock.json by INSTALL Types for NodeJS
        npm install @types/node --save-dev
    
    INSTALL SocketIO
        npm install socket.io
        npm install @types/socket.io
C11
    
    GENERATE dist/server/server.js from src/server/server.ts 
        tsc src/server/server.ts --outDir dist/server/ --esModuleInterop true
        https://www.typescriptlang.org/docs/handbook/compiler-options.html  
    
    COPY tsconfig.json
    
    GENERATE dist/server/server.js.map
        tsc -p src/server
    
    START SERVER
        node dist/server/server.js

C12
    COMPILE with watch option (-w) to update changes
        tsc -p src/server/ -w   
    START UPDATED SERVER
        node dist/server/server.js
    INSTALL NODEMON
        npm install nodemon --save-dev

    HOST server using NODEMON
         (in new Terminal as paralell process in project directory)
    
    "tsc -p src/server/ -w" will listen to changes to src/server.ts and update server.js
    nodemon will look for changes in dist/server/sercer.js and update server
    npx will udate in real time every time we change & save the files
            
    TO USE A SINGLE TERMINAL
        INSTALL concurrently
            npm install concurrently --save-dev 
        ADD to package.json (line 6 )
            "dev" : "concurrently -k \"tsc -p src/server -w\" \"nodemon dist/server/server.js\"",
        RUN
            npm run dev

C13 
    CREATE (copy) dist/client/index.html
    INSTALL express and it's types
        npm install express
        npm install @types/express


    MODIFY ./src/server/server.ts
        IMPORT express & path
        INSTANTIATE const app = express()
        INSTANTIATE const io = new socketIO.Server(this.server)
        SOCKET CONFIGURATIONS      socketIO.Server(this.server,{path:"/custompath",serveClient:false})
        https://expressjs.com/en/4x/api.html#app.use
        https://socket.io/docs/v4/server-options/#socketio-server-options
        https://socket.io/docs/v4/server-initialization/#with-an-https-server

        DOWNLOAD Client JS from a CDN (Content delivery network) (Cloudflare's one)
            Put in Client's HTML:
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js"
                integrity="sha512-aMGMvNYu8Ue4G+fHa359jcPb1u+ytAF+P2SCb+PxrjCdO3n3ZTxJ30zuH39rimUggmTwmh2u7wvQsDTHESnmfQ=="
                crossorigin="anonymous"></script>
C14
    CREATE client.ts
    INSTALL the Socketio-Client and Types
        npm install socket.io-client
        npm install @types/socket.io-client --save-dev
    CREATE tsconfig.json

    COMPILE You can manually recompile using
        tsc -p ./src/client -w
    AUTO-COMPILE
        add to package.json  "scripts":
            \"tsc -p ./src/client -w\"

    USE NEW CLIENT             
        add to the <body> of ./dist/client/index.html  :
        <script src="socket.io/socket.io.js"></script>
        <script src="client.js"></script>

C14-VIDEO   
    ADD to server.ts :
        socket.emit("message","hello"+socket.id)
        console.dir(socket)
        socket.on("disconnect", function(){
            console.log(`user disconnected ${info}`)    })

        console.dir(socket)  shows us :
            maxHeaderSize: undefined,
            insecureHTTPParser: undefined,
            requestTimeout: 300000,
            headersTimeout: 60000,
            clientsCount: 1,
            _connections: 1,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false
            handshake: {
                referer: '127.0.0.1:3000',
                dnt: '1',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0
                host: '127.0.0.1:3000',
            }
            time: 'Fri Jul 28 2023 20:33:44 GMT-0300 (Argentina Standard Time)',
            address: '::ffff:127.0.0.1'

C15 ADD in client:
        this.socket.on('message', function (message: any) {
            console.log(message)
            document.body.innerHTML = message
        })

    COMMENT in client.js to avoid errors
        // import { io } from 'socket.io-client';
    RELOAD client to watch 
        Hello yxnpXvJfCYxwSwmlAAAB

C16
    SERVER BROADCAST
        socket.broadcast.emit('message','Everybody, say hello to ' + socket.id)

C17 IO-EMIT


C22
    INSTALL BOOTSTRAP
        npm install jquery
        npm install @types/jquery --save-dev

        npm install bootstrap
        npm install @types/bootstrap --save-dev

    HTML ADD STATIC PATHS in SCRIPTS
        <head>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
        
        <body>
        <script src="jquery/jquery.min.js"></script>
        <script src="bootstrap/js/bootstrap.bundle.min.js"></script>

    SERVER express use jQuery & bootstrap
        app.use( express.static( path.join(__dirname, '../../node_modules/jquery/dist')))
        app.use( express.static( path.join(__dirname, '../../node_modules/bootstrap/dist')))
