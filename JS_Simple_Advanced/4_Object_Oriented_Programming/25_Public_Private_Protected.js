console.clear() //will delete all  22_Protottypes.js  console.log()
/* GO_LIVE { +  Edit 
             +  Save changes 
             +  Inspect F12 refrash  ...repeat }   */

class Person {
    constructor (name,age) {         // CONSTRUCTOR FUNCTION
        this.name = name
    }
}

class Janitor extends Person{
    constructor(name, numberOfMops ) { 
        super(name)
        this.numberOfMops = numberOfMops 
        this.bool = true
    }
    // bool = true   ..public
    #cleaninElements = 10           // PRIVATE hidden variable cant be accesed
    //                       outside object... even child classes can't
    _protectec = 10                 // PROTECTED by convencion only accesed by GETTER SETTER
    //                         there is no real protected variables in JS
    set cleaninElements(value){
        if(value>5){ this.#cleaninElements=value}
    }
    clean = () => {   // OverWritten methode
        console.log("Jenitor "+this.name+
        " mopped the floor with "+this.numberOfMops+" mops"+
        "and "+this.#cleaninElements+" cleanin elements")
    }
}
const jenitor = new Janitor("Raul",5)
console.log(jenitor)                        // #internalOnlyVariable : 0
console.log(jenitor.cleaninElements)  // "undefined" not accesible outside
jenitor.clean()            // "is cleaning" accesible by methods


class SuperJanitor extends Janitor {
    #cleaningElements = 100
}

const sup_jenitor = new SuperJanitor("Jerry",50)
console.log(sup_jenitor)                    // #internalOnlyVariable : 0
sup_jenitor.clean()                         // still has 10 elements
                        // must implement  _protected bariable

