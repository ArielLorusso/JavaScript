const { readFile } = require( 'node:fs/promises');

// IIFE  Inmediate Invoked Func Expression
(
    async () => {
        console.log('Leyendo el primer archivo ... ')
        const text = await readFile('./archivo.txt', 'utf-8')
        
        console.log('primer texto:', text)
        console.log('→ Hacer cosas mientras lee el archivo... ')
        
        console.log('Leyendo el segundo archivo ...')
        const secondText = await readFile('./archivo2.txt', 'utf-8') 
        console.log('segundo texto:', secondText)
        
    }
)()// llamada a funcion anonima

//  node C4_AsyncAwait.mjs  FUNCIONA
//  node C4_AsyncAwait      NO FUNCIONA

Promise.all([ // ASYNCRONIA PARALELA
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text,text2]) => {
    console.log('Promise text 1:', text)
    console.log('Promise text 2:', text2)
})
