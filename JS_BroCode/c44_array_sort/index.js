
tii = Date.now();
let grades = [100, 50, -10, 90, .60, 80, 70];
let words  = ["air","cat","race","dice","zero","flow"];

function ascendingSort (x, y)  { return x - y; } //  0 -> 9
function descendingSort(x, y)  { return y - x; } //  9 -> 0



function print(element){
    console.log(element);
}

grades = grades.sort(descendingSort).reverse();
grades.forEach(print);

words = words.sort().reverse();
words.forEach(print);

console.log("time : "+window.performance.now())
//##############################################################################
