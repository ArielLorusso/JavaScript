
const sym1 = Symbol("name")         // SYMBOL CANT BE ACCES
//const symG = Symbol.for("name")   // GLOBAL SYMBOL CAN BE ACCES

export const person = {
  age: 25,
  [sym1]: "Kyle",
} 


//console.log(person) // { age: 25,  [Symbol(name)]:"Kyle"}
//console.log(person[sym1]) 