// Ctrl + /
// console.log('Hola mundo')
// console.log(globalThis)

const os = require('node:os')
// import os from 'node:os'

console.log('OS INFO')
console.log('--------------------------')
console.log('os name', os.platform())
console.log('os version', os.release())
console.log('CPUs', os.cpus())
console.log('arch', os.arch())
console.log('Mem Avb', os.freemem()/1024/1024)
console.log('Mem Tot', os.totalmem()/1024/1024)
console.log('uptime', os.uptime()/60/60)

