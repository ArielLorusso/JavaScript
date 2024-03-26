https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=2
    
RUST : https://www.rust-lang.org/learn/get-started
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
FNM : https://github.com/Schniz/fnm
        curl -fsSL https://fnm.vercel.app/install | bash
    fnm
    //error: 'fnm' requires a subcommand but one was not provided
    //[subcommands: list-remote, ls-remote, list, ls, install, use, env, completions, alias, unalias, default, current, exec, uninstall, help]
    fnm install 20.5.1
    fnm list
    //    * v20.5.1 default
    //    * system
    fnm alias v20.5.1  // v20.5.1 set as default
    
NODE :
    node
    Welcome to Node.js v20.5.1.
    Type ".help" for more information.
    > .help
    .break    Sometimes you get stuck, this gets you out
    .clear    Alias for .break
    .editor   Enter editor mode
    .exit     Exit the REPL
    .help     Print this help message
    .load     Load JS from a file into the REPL session
    .save     Save all evaluated commands in this REPL session to a file
    //  REPL Read Eval Print Loop
    
    Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
    > const a = 'Hola mundo'
    undefined
    > console
    Object [console] {
    log: warn: dir: time: timeEnd: timeLog: trace: assert: clear: count:
    countReset: group: groupEnd: table: debug: info: dirxml: error: groupCollapsed:
    Console: profile: profileEnd: timeStamp: context: createTask:}
    > console.log(a)
    Hola mundo
    .
    > 2+2
    4
    > Ctrl+C  To exit, press Ctrl+C again
    .
    node index.js   //     node index
        Hola mundo
    .
    console.log(window)
            ^ // node no tiene objeto ventana como en navegador
    ReferenceError: window is not defined
    .
    console.log(globalThis)
    // en navegador :   glabalThis == window
    // en node :        glabalThis == global

MODULE  30:00   IMPORT  EXPORT
    sum.js :
        module.exports = {sum}
    index.js:
        const {sum} = require('./sum')
    .
    index.mjs:  // moderno RECOMENDADO
        import { sum }  from './sum.mjs'
    sum.mjs :               
        export function sum (a,b)
        {  return a+b } 
    
    // .js CommonJs 
    // .mjs ES Modules 
    // .cjs CommonJs 

    