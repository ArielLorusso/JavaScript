// TYPE ANOTATIONS in arguments
{
    function f1(arg) { return "hello " + arg; }
    function f2(arg) { return "hello " + arg; }
    function f3(arg) { return "hello " + arg; }
    //f1
    console.log(f1("a"));
    //console.log(f1( 1 ));   // ERROR foo expects string
    //f2
    //console.log(f2("a"));   // ERROR bar expects number
    console.log(f2(1));
    //f3
    console.log(f3("yes"));
    console.log(f3(1));
}
// ARRAY
function foo(bar) {
    return 'Hello, ' + bar;
}
var baz = [1, 2, 3];
console.log(foo(baz));
// to compile it to JS:
// tsc SOCKETS/c5_type_anotations/foo.ts
// to run it :
// node SOCKETS/c5_type_anotations/foo.js
// having the 2 open (JS & TS codes)
// at same time will trow errors in TypeScript side 
// ERROR: Duplicate function implementation.
//https://www.typescriptlang.org/docs/handbook/compiler-options.html
