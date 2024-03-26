function foo(bar) {
    return 'Hello, ' + bar;
}

let baz = 'ABC';

console.log(foo(baz));

// to compile it to JS:
// tsc SOCKETS/c4_first_build/foo.ts

// to run it :
// node SOCKETS/c4_first_build/foo.js

// having the 2 open (JS & TS codes)
// at same time will trow errors in TypeScript side 
// ERROR: Duplicate function implementation.

//https://www.typescriptlang.org/docs/handbook/compiler-options.html