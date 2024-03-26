// data to create our object
const age     = 22;
const name    = 'Pepe';
const surname = 'Arge'
const sayHi   = function sayHi() {
    console.log(" say hi ")
}

// enhanced objects 
// now OBJ are EASY to create

let person = {  // FIELD   : VALUE (takes same value )
    age,        // age     : age     === 22
    name,       // name    : name    === 'Pepe'
    surname,    // surname : surname === 'Arge'
    sayHi,      // sayHi   : [Function: sayHi ===  { console.log(" say hi ") }
    sayYeah(){
        console.log(" Yeah ");
    }       
};

person[name] = 33 ;      // DINAMIC PROPIETY CHANGE
person['prop'] = 'ABC' ; // DINAMIC PROPIETY ADD
for (let i = 0; i < 4; i++) {
    person[`square${i}`] = i**2;
}


///////////////////////////////////     ITERATOR  ///////////////////////////////////
for (const key in person) { // forin
    if (Object.hasOwnProperty.call(person, key)) {  // age     33
        console.log( key,person[key] );             // name    Pepe    
    }                                               // surname Arge
    if (key=='sayHi'){ sayHi()}   // true              sayHi   [Function: sayHi]
                                  //    ╰─────────────────────▶ " say hi "
    if (typeof person[key] == 'function') { person[key]() }//─▶ " say hi "
}                                   //      func call ────────▶ " Yeah "      

// const array = ["A", "B", "C", "D", "E"]
// for (const elem in array) {
//     console.log(elem)
// }