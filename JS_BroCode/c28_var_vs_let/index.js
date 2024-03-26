// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}


for (let i = 1; i<=3;i+=1)
{
    console.log(i); // 1 2 3
}
// console.log(i); // unaccesible (undefined)


function doSomething() {
    for (var j = 1; j<=3;j+=1) {
        console.log(j); // 1 2 3
    }
    console.log(j); // 4
}
doSomething()
console.log(j); // unaccesibl


// let name = "bro";    // is Ok 
var name = Bro;         // is Problematic  changes windows.name