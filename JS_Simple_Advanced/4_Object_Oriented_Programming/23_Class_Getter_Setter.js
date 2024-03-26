console.clear() // will delete all  22_Protottypes.js  console.log()
/* GO_LIVE { +  Edit 
             +  Save changes 
             +  Inspect F12 refrash  ...repeat }   
*/
function Human (name,age) { //  PROTOTYPE CONSTRUCTOR
    this.name = name      //    function + this = atributes
    this.age = age
    this.printName = () => {
        console.log(this.name)
    }
}             
class Person  {             //  CLASS  == PROTOTYPE CONSTRUCTOR
    constructor (name,age){ //  atributes must be set by constructor
        this.name = name
        this.age = age
    }
    printName = () => {
        console.log(this.name);
    }
    static sayHi()  {       // Static method (not in OBJ) but Class
        console.log("Hi");
    } 
}

// Adding a dynamic method to the class itself   The same as static 
Person.sayNo = () =>  {  console.log("No");} 
Person.favorite = "pizza"                     // dinamic atribute


const person = new Person("kyle",25)
console.log(person)
person.printName()

console.log(Person.favorite) // pizza
Person.sayNo();  // Calling the dynamic method on the class
Person.sayHi()   // person.sayNo() == ERROR

//                                   
/////////////////////////////////////   EXCERCISE   ///////////////////////
//  IMPLEMENT WITH CLASS   use GETTER & SETTER

function createUser(email, password, language){
    return {email, password, language}
}
console.log( createUser("test@mail","pass","English") )
//////////////////////////////////////////
class User {
    constructor(email, password, language){
        this.email = email, 
        this.password = password, 
        this.language = language
    }
    get name()    { return this.email.split("@")[0] }
    set name(arg) { const [,sufix] = this.email.split("@")
                       this.email = arg +"@"+ sufix }

    logUser = () =>{
        console.log( this.email+","+this.password+","+this.language )
        //console.log( this )
    }
}

const newUser = new User("test@mail","pass","English")
newUser.name = "pepe"           // SETTER
console.log(newUser.name )      // GETTER
newUser.logUser()
//        ^?