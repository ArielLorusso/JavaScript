// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{
    #gas;      // Private -->#
    #power;
    constructor(power){
        this.#gas = 25;
        this.#power = power;
    }
    get power(){           // GETTERS cant have same name as atribute
        return `${this.#power}hp`;  //by convention atribut begin with _
    }
    get gas(){
        return `${this.#gas}L ${this.#gas / 50 * 100}%`;
    }
    set gas(value){           // SETTER
        if(value > 50)    { value = 50;} // truncated between 0 50L
        else if(value < 0){ value = 0; }
        this.#gas = value;
    }
}
///////////////////////////////// INSTANCE test
let car = new Car(400);
car.gas = 10;            // correct way by setter gas()

// car.#gas= 200;           
// Private field '#gas' must be declared in an enclosing class

console.log(car.power);     // 400hp      getter power() output
console.log(car.gas);       // 10L 20%    getter gas() output

