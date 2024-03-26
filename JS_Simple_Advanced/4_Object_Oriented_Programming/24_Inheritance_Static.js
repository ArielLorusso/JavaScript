console.clear() //will delete all  22_Protottypes.js  console.log()
/* GO_LIVE { +  Edit 
             +  Save changes 
             +  Inspect F12 refrash  ...repeat }   */

class Animal  { // CONSTRUCTOR FUNCTION
    constructor(name) {
        this.name = name
    }
    speak = () => {
        console.log("I am "+this.name)
    }
}
const animal = new Animal("Brad")
animal.speak()
// CREATE
class Dog extends Animal{
    constructor (name,owner){
        super(name) // name is created by parent constructor
    //  this.name = name;  // ReferenceERROR : Must call super constructor before accessing 'this'
        this.owner = owner;
    }
    speak = () =>{ // OverWritten methode
        console.log("Bark")
    }
}
class Cat extends Animal{
    // no explicit constructor -> default = constructor(){ super()}
    speak = () =>{ // OverWritten methode
        console.log("Meow")
    }
}
// TEST
const dog = new Dog("Firulais","Bart")
const cat = new Cat("Bola-De-Nieve")
console.log(dog.name)
dog.speak()
console.log(cat.name)
cat.speak()
console.log(dog)

/////////////////////////////// Excercise

class Person {
    constructor (name,age) { // CONSTRUCTOR FUNCTION
        this.name = name
    }
}
class Janitor extends Person{
    constructor(name) { super(name)}
    clean = () => {   // OverWritten methode
        console.log("Jenitor "+this.name+" mopped the floor")
    }
}
const jenitor = new Janitor("Raul")
console.log(jenitor)
jenitor.clean()