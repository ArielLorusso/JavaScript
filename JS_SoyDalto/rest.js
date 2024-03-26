
https://youtu.be/ivdTnPl1ND0?t=28578

// ... operador rest en declaracion para argumento multiple
function show(...etc){
  console.log(etc);
}
show([1,2],[3,4]);

// ... operador rest en ejecucion para desglozar argumento multiple
const numeros = [1,2,3]
function sumar(x,y,z) {
    return x+y+z;
}
console.log(numeros);    //  [1,2,3]
console.log(...numeros); //  1  2  3
console.log(sumar(...numeros)); //6



//Array.REDUCE() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
/*
const suma = (...etc) => {  // reduce()
    return etc.reduce( (a,b) => a+b); // reduce metodo de variable para 
}
const mult = (...etc) => {
    return etc.reduce( (a,b) => a*b); // reduce metodo de variable para 
}
const raro = (...etc) => {
    return etc.reduce( (a,b,c) => a*b+c); 
}
const raro2 = (...etc) => {
    return etc.reduce( (a,b,c,d) => a+b+d[c]); 
}

console.log( suma(1,2,3,4));
console.log( mult(1,2,3,4));
console.log( raro(10,20,30,40));



//   a     b   c            a : acumulator (start elem 1
//   10 * 20 + 1 = 201      b : values     (start elem 2
//  201 * 30 + 2 = 6032     c : iteration_index
// 6032 * 40 + 3 = 241283   d : whole array
// Debugged HTML in VsCode + Edge
console.log( raro2(1,2,3,4));
// a   b   d[c]    
// 1 + 2 +  2  = 5
// 5 + 3 +  3  = 11
//11 + 4 +  4  = 19

*/