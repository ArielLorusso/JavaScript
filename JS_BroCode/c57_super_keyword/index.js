// super = Refers to the parent class. 
//         used to invoke constructor of a parent class

// super must be call before accesing 'this' in deribed class

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
//////////////////////////////////  CHILD
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);               // SUPER : Animal constructor
        this.runSpeed = runSpeed;      // is called by Rabbit constructor before this.
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
////////////////////////////////// INSTANCES
const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);