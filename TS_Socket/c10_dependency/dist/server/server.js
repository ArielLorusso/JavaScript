"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const luckyNumbers_1 = __importDefault(require("./luckyNumbers"));
const port = 3000;
class App {
    constructor(port) {
        // ASIGN PORT   port will be given as argument
        this.port = port;
        // INSTANCE  Express.js
        const app = (0, express_1.default)();
        //https://expressjs.com/en/4x/api.html#app
        // CONFIG EXPRESS    
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        // Express Middleware functions  have access to 
        //  the request and response objects (req, res)
        //  serve static files (ej : HTML, CSS, JavaScript, images)
        //  path is a core module in Node.js 
        //  __dirname a Node.js variable represents the current directory path
        //  https://expressjs.com/en/4x/api.html#app.use
        // CREATE SOCKET
        this.server = new http_1.default.Server(app);
        // Node's http.Server class handles HTTP requests and responses.
        // using the Express application (app) as the request 
        // SOCKET OPTIONS 
        this.io = new socket_io_1.default.Server(this.server, {});
        // The new socketIO.Server constructor integrates to Socket.IO server
        // This.Server  allows Socket.IO to work alongside our HTTP
        // socketIO.Server(this.server,{ path:"/custompath", serveClient:false})
        //https://socket.io/docs/v4/server-options/
        //INSTANCE our library
        this.game = new luckyNumbers_1.default();
        // SOCKET BEHAVIOUR
        this.io.on('connection', (socket) => {
            console.log('a user connected : ' + socket.id);
            this.game.LuckyNumbers[socket.id] = Math.floor(Math.random() * 10);
            // USER CONNECTED
            socket.emit('message', 'Hello ' + socket.id + ', your lucky number is ' +
                this.game.LuckyNumbers[socket.id]);
            socket.broadcast.emit('message', 'Everybody, say hello to ' + socket.id);
            socket.on('disconnect', function () {
                console.log('socket disconnected : ' + socket.id);
            });
            socket.on('message', function (message) {
                console.log(message);
            });
        });
        // EVERY 1000 ms run anonymous callback function
        setInterval(() => {
            // GENERATE random
            let randomNumber = Math.floor(Math.random() * 10);
            // ADD to
            let winners = this.game.GetWinners(randomNumber);
            if (winners.length) {
                winners.forEach((w) => {
                    this.io.to(w).emit('win', randomNumber + '*** You are the winner ***');
                });
            }
            this.io.emit('random', randomNumber);
        }, 1000);
    }
    Start() {
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}.`);
    }
}
// INSTANCE our APP
new App(port).Start();
//# sourceMappingURL=server.js.map