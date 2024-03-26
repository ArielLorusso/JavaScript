import express from 'express'
import path from 'path'
import http from 'http'
import socketIO from 'socket.io'
import LuckyNumbersGame from './luckyNumbers'

const port: number = 3000

class App {
    private server: http.Server
    private port: number

    private io: socketIO.Server
    private game: LuckyNumbersGame

    constructor(port: number) {
        // ASIGN PORT   port will be given as argument
        this.port = port
        
        // INSTANCE  Express.js
        const app = express()
            //https://expressjs.com/en/4x/api.html#app
        
        // CONFIG EXPRESS    
        app.use(express.static(path.join(__dirname, '../client')))
            // Express Middleware functions  have access to 
            //  the request and response objects (req, res)
            //  serve static files (ej : HTML, CSS, JavaScript, images)
            //  path is a core module in Node.js 
            //  __dirname a Node.js variable represents the current directory path
            //  https://expressjs.com/en/4x/api.html#app.use
        
        // CREATE SOCKET
        this.server = new http.Server(app)
            // Node's http.Server class handles HTTP requests and responses.
            // using the Express application (app) as the request 
        
        // SOCKET OPTIONS 
        this.io = new socketIO.Server(this.server,{})
            // The new socketIO.Server constructor integrates to Socket.IO server
            // This.Server  allows Socket.IO to work alongside our HTTP
                // socketIO.Server(this.server,{ path:"/custompath", serveClient:false})
                    //https://socket.io/docs/v4/server-options/

        //INSTANCE our LuckyNumbers library as GAME
        this.game = new LuckyNumbersGame()

        // SOCKET  ON CONNECTION
        this.io.on('connection', (socket: socketIO.Socket) => {
            console.log('a user connected : ' + socket.id)
            // ASIGN a random value to the key ID_value
            this.game.LuckyNumbers[socket.id] = Math.floor(Math.random() * 10)
    
            // EMIT WELLCOME connected user &  tell its luky number
            socket.emit('message', 'Hello ' + socket.id + ', your lucky number is ' +
                this.game.LuckyNumbers[socket.id] )
            // BROADCAST WELLCOME for everyone to know about the user
            socket.broadcast.emit('message', 'Everybody, say hello to ' + socket.id )
            
            // LOG DISCONNECTION
            socket.on('disconnect', function () {
                console.log('socket disconnected : ' + socket.id)
            })
            // LOG MESSAGES
            socket.on('message', function (message: any) {
                console.log(message)
            })
        })

        // EVERY 1000 ms run anonymous callback function
        setInterval(() => {
            // GENERATE random value 0 to 9
            let randomNumber: number = Math.floor(Math.random() * 10)
            // make a list containing araay of winners SocketID 
            let winners: string[] = this.game.GetWinners(randomNumber)
            // IF there are winners(not empty)
            if (winners.length) {
                // For every Winner in list
                winners.forEach((w) => {
                    // TELL THE WINER that it won & NUMBER
                    this.io.to(w).emit('win', randomNumber+ '*** You are the winner ***')
                })
            }
            // EMIT LAST RANDOM   (BROADCAST ?)
            this.io.emit('random', randomNumber) }, 1000)
    }

    public Start() {
        this.server.listen(this.port)
        console.log(`Server listening on port ${this.port}.`)
    }
}

// INSTANCE our APP
new App(port).Start()
