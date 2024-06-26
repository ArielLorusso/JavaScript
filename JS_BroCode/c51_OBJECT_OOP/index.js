// object = A group of properties and methods
//     properties = what an object has
//       methods  = what an object can use to access properties/methods


//  OBJ 1
const car1 = { 
    model:"Mustang",    // properties
    color:"red",
    year:2023,

    drive : function(){ // methods
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}
//  OBJ 2
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();