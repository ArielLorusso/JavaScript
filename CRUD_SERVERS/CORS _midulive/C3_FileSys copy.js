// Ctrl + /


let fs = require('node:fs') // desde node 1.6 se usa mode:module fs es Syncronica
const {promisify} = require('node:util')
const readFilePromise = promisify(fs.readFile) // SOLO EN MODULOS SIN PROMESAS


////////  SINCRONICO   ///////////////
const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
    )
const text = fs.readFileSync('./archivo.txt', 'utf-8') // sincronico
console.log('Sync 1 :',text)
        

////////  ASINC CALLBACK   ///////////////
fs.readFile('./archivo.txt', 'utf-8' , (err,text) => { // async sin promise
    console.log('Async 1 :',text)  // callback function after read 
})


////////  ASYNC PROMISE  ///////////////
fs = require('node:fs/promises') // Promises es async

console.log('MIENTRAS LEO')         // se imprime primero dado que
console.log('leyendo archivo 2')    // se realiza durante la lectura

fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {                     // promise
    console.log("Async 2 :", text);
})
.catch(error => {                   
    console.error("An error occurred:", error);
});
  
////////  PROMISIFY   ///////////////
readFilePromise('./archivo2.txt', 'utf-8')
.then(text => {                     // promise
    console.log("Async 3 :", text);
})
.catch(error => {                   
    console.error("An error occurred:", error);
});
  