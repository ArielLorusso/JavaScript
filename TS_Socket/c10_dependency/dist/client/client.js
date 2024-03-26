"use strict";
class Client {
    constructor() {
        this.socket = io();
        // CONNECT
        this.socket.on('connect', function () {
            console.log('connect');
            document.body.innerHTML = ''; // EMPTY HTML
        });
        // DISCONECT
        this.socket.on('disconnect', function (message) {
            console.log('disconnect ' + message);
            document.body.innerHTML +=
                'Disconnected from Server : ' + message + '<br/>';
            //location.reload();
        });
        // EMIT RECEPTION
        this.socket.on('win', (message) => {
            console.log(message);
            document.body.innerHTML += message + '<br/>';
            this.socket.emit('message', this.socket.id + `: is winer
` + `it's nunber was : ` + message[0]);
        });
        this.socket.on('message', (message) => {
            console.log(message);
            document.body.innerHTML += message + '<br/>';
        });
        // BROADCAST RECEPTION
        this.socket.on('random', function (message) {
            console.log(message);
            document.body.innerHTML += message + '<br/>';
        });
    }
}
const client = new Client();
