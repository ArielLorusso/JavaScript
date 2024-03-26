console.clear() //will delete all  22_Protottypes.js  console.log()
// GO_LIVE { +  Edit 
//           +  Save changes 
//           +  Inspect F12 refrash  ...repeat }

console.clear()

function Person (name,age) { // CONSTRUCTOR FUNCTION
    this.name = name,
    this.age = age,
    this.printName = () => {
        console.log(this.name)
    }
}   // constructor : return this

    const person = new Person("Kyle",24) // person has prototype Person OBJECT
    you = Object.create(person)          // me has prototype person 
    you.age=30;
    console.log( you.age  )             //  30 -> found in you
    
    // IMPORTANT  : when searching for atributes 
    // engine will search the prototype chain...
    // look if its in me, then Person, then Object, else returns undefine
    me = Object.create(person) // person is prototype of me
    console.log( me  )         //  { person {} [[Prototype]]: Person 
    console.log( me.age  )     //  24 -> found in person
    console.log( me.ages  )    //  undefined -> not found

// PROTOTYPE NESTING CHAIN   getPrototypeOf()
{  /*  {   name: "Kyle",
    age: 24,
    printName: [Function]   }  */
    console.log(person)
    console.log(Object.getPrototypeOf(person) )  // {constructor: ƒ} [[Prototype]] : Object
    console.log(Object.getPrototypeOf(
                Object.getPrototypeOf(person)))//  {constructor: ƒ}
    person.printName()                           //  Kyle
}
// EMPTY OBJ  Object.create()
{
    console.log(Object.create(null)  )  //  {}   No propieties
    const test = {}                 // default Object class methods
    console.log( {} )               //  {} [[Prototype]] : Object
    console.log(test.toString())    // [object Object]
}

// test inherits from class Object


