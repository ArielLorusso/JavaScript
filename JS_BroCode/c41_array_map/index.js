//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square); // ARRAY.MAP
let cubes   = numbers.map(cube);

function square(element){ return Math.pow(element, 2); } //MAP FUNCTION 
function cube(element)  { return Math.pow(element, 3); }

console.log(numbers);
console.log(squares);
console.log(cubes);



/*
function print(element) { (element); }
numbers.forEach(print);
squares.forEach(print);
cubes.forEach(print);
*/