//      BAD
// NODE.JS does NOT RUN TS
// node SOCKETS/c5_types/c5.ts    (JS SyntaxError: Unexpected token ':')
//      GOOD
// COMPILING TO JS FIRSR
// tsc SOCKETS/c6_types/c6.ts  
// node SOCKETS/c6_types/c6.js  


// PRIMITIVE TYPES 0:13
var a;
var b;
// INTERFACE 1:58
{
    function f4(foo) { return "Hello " + foo.myInerface + " " + foo.otherType; }
    var c = void 0;
    var d = { myInerface: "abc", otherType: 123 };
    console.log(f4(d));
}
// TYPE  
// similar to interface (shows more info but cant merge)
{
}
// MERGE 4:15
{
    // will be merged like : 
    /*
        interface MyInerface{
            myInerface : string
            otherType : number
        }                       */
}
