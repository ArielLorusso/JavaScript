//  HTTP hypertext transfer protocol
//
// https://bluuweb.github.io/node/01-fundamentos/#servidor-http

// importamos  http
const http = require('http');   
// creamos servidpr REQUEST/RESPONSE
const server = http.createServer((req,res)=> {
    res.end('respondo solicitudds')
})

// configuramos puerto
const puerto = 3000;
server.listen(puerto,()=>{
    console.log('escucho solicitudd')
})

// visita :  http://localhost:3000/
//
// podemos ver : respondo solicitud

// cada ambio en la respuesta requiere reiniciar el servidor
// NODEMON soluciona el problema
//
// npm install -g nodemon
// nodemon c6_HTTP.js
// al guardar cambios el servidor se actualizza solo
// https://bluuweb.github.io/node/02-servidor/#modulo-http
// Express mejora es