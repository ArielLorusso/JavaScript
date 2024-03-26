//      BAD
// NODE.JS does NOT RUN TS
// node SOCKETS/c5_types/c5.ts    (JS SyntaxError: Unexpected token ':')

//      GOOD
// COMPILING TO JS FIRSR
// tsc SOCKETS/c6_Primitiv_Protot/c6.ts  
// node SOCKETS/c6_Primitiv_Protot/c6.js  

// TYPE CHECK
{
    function f1( arg:string ) { return "hello " + arg}
    function f2( arg:number ) { return "hello " + arg}
    function f3( arg:"yes"|"no" | number) {return "hello " + arg }
    
        //f1
    console.log(f1("a"));
    //console.log(f1( 1 )); // ERROR foo expects string
        //f2
    //console.log(f2("a"));   // ERROR bar expects number
    console.log(f2( 1 ));  
        //f3
    console.log(f3( "yes" ));  
    console.log(f3( 1 ));  
}

// PRIMITIVE TYPES 0:13
let a : null  | void | undefined
let b : number | boolean | string

// INTERFACE 1:58
{
    interface MyInterface{
        myInerface : string
        otherType : number
    }
    function f4(foo:MyInterface){return "Hello "+foo.myInerface+" "+foo.otherType}

    let c : MyInterface

    let d = { myInerface:"abc", otherType: 123}
    console.log(f4(d));

}
// TYPE  
// similar to interface (shows more info but cant merge)
{
    type MyType = {
        first : string
        second : number
    }
}

// MERGE 4:15
{
    interface Inerface{
        myInerface : string
    }
    interface Interface{
        otherType : number
    }
    // will be merged like : 
/*
    interface MyInerface{
        myInerface : string
        otherType : number
    }                       */
}
