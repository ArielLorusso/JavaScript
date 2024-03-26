import {person} from './10-1_module.js'  // SYMBOL HIDES OBJECT IMPLEMENTAION DETAILS
const Log = (a) => console.log(a)
/////////////////////////////////////////////
// const sym1 = Symbol("name")
// const sym2 = Symbol("name")
// Log(sym1)         // Symbol("name")
// Log(sym2)         // Symbol("name")
// Log(sym1 == sym2) // false          SYMBOL is always unique NEVER CONFLICT
// //////////////////////////////////////////////////////////////
Log(person) // { age: 25,  [Symbol(name)]:"Kyle"}
// Log(person[sym1])                    CANT SHOW [sym1] KEY IT HERE
/*                                      CANT OVERWRITE VALUE
Object.entries(person).forEach(([key,value])=>{ // age
  Log(key,value)
})

Log(JSON.stringify(person))                     // { "age":25 }
Log(Object.getOwnPropertySymbols(person))       // [ Symbol(name) ]

*/