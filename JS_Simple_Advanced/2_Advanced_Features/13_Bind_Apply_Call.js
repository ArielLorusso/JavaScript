window.name = "Global Name" // CANT USE NODE (BROWSER ELEMENT) 
const person = {
    name:"kyle", }

function printName(){
    console.log(this.name) // this -> WINDOW   
}
printName()                // "Global Name"

// BIND : changes what (this) points at
const personPrintName = printName.bind(person)
personPrintName();           // this = person
// CALL es como bind pero en llamada a funcion (Dinamica)
a = printName.call(person);     // this = person
console.log(a)                  // undefined
//
//   This deve ser un objeto no una variable cualquiera
//--------------------------------------------------
//
const esto ={
    number:2
}
sum=(a,b) => 
{ console.log([a,b]) }
//{ return a+b }
console.log(sum(2,2))           // sum(2,2) = 4
// BIND
sumTwo = sum.bind(null,2)       // this -> null, a=2 
console.log(sumTwo(5,10))       // sum(2,5) = 7

sumTwo = sum.bind(1,null,2)     // this -> null, a=2 
console.log(sumTwo(5,10))       // sum(null,2) = 2

sumTwo = sum.bind(1,[null,2])   // this -> null, a=2 
console.log(sumTwo(5,10))       // sum(null,2) = 2
// CALL
console.log(sum.call(null,5,10)) // sum(5,10) = 15
// APPLY 
console.log(sum.apply(null,[5,7]))// sum(5,7) = 12
// ... same as call but :     arguments  = [array] 

//////////////////////////////  ARRAY EXAMPLES

mul=(a,b) => { return a*b }
const numbers = [1,2,3,4,5]
    // ARRAY MAP
const NumbersFunc = numbers.map( number => {return mul(2,number)})
console.log(NumbersFunc)             //  [2, 4, 6, 8, 10]
const NumbersBind = numbers.map(mul.bind(null,2))
console.log(NumbersBind)             //  [2, 4, 6, 8, 10]
   // REDUCE 
sum=(...numbers) =>  
{ return numbers.reduce((sum,n) => sum+n) }
const NumbersApply = sum.apply(null,numbers)
console.log(NumbersApply)             // 1+2+3+4+5 = 15

