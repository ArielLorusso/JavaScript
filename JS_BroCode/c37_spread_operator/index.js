
// ... spread operator = allows an iterable like
//                      array or string to be expanded 
//                      in places where zero or more 
//                      arguments are expected
//                      (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);     // USED IN EXECUTION
console.log(maximum);
document.write(maximum);


let show = (...x) =>{                   // USED IN DEFINITION
    alert(` bigest number from ${x} is..`);
}
show (numbers)
