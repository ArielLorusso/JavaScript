
let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(suma); // REDUCE to single value using SUMA
let integ = prices.reduce(inte); // REDUCE to single value using SUMA

console.log(`The sum is: $${total}
The weigted sum is : $${integ}`);

function suma(total, element, index){  // SUMA acumulation
    return total + element;
}
function inte(total, element, index){  // integ
    return total + (element*index);
}
