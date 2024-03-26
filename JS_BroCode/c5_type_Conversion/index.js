
let age = window.prompt("whats your age")   // easy way 1 use

age +1; //does not work for string
console.log("username",age,"years old");    
age = Number(age)+1;
console.log("username",age,"years old");
console.log("age is type ",typeof age);


let x,y,z;
x = Number (false);
console.log(" x is  " , x);
x = Number ("3.14");
console.log(" x is type ",typeof x);

y = String (false);         // DOESNT WORK
console.log(" y is  " , y);
y = String (3.14);
console.log(" y is type ",typeof y);


z = Boolean(0)
console.log(" z is  ",z);
z = Boolean("")
console.log(" z is  ",z);

