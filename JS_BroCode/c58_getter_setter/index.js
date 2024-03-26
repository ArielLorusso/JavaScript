// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{

    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){           // GETTERS cant have same name as atribute
        return `${this._power}hp`;  //by convention atribut begin with _
    }
    get gas()  { return `${this._gas}L ${this._gas / 50 * 100}%`; }

    set gas(value){           // SETTER
        if(value > 50)    { value = 50;} // truncated between 0 50L
        else if(value < 0){ value = 0; }
        this._gas = value;
    }
}
///////////////////////////////// INSTANCE test
let car = new Car(400);
car.gas = 10;            // correct way by setter gas()
car._gas = 100;          // incorrect way but works

console.log(car.power);     // 400hp      getter power() output
console.log(car.gas);       // 100L 200%    getter gas() output

// WE SOLVE THIS USING A PRIVATE ATRIBUTE
