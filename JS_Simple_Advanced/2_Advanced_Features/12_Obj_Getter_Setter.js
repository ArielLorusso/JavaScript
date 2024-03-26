//
//
//Encapsulation and Data Validation:
// Getters allow you to create computed properties 
// based on the current state of the object.

let person = { 
    _age:22,          // _age    _: should not be access directly
    _name:"pepe",      //
    _surname:"arg",    // 
    //  
    get age()     { return this._age},   
    get fullname(){ return this.name+" "+this.surname },   
    // SETTER
    set age(a)     {  this._age = a },     
    set fullname(a){ 
        [this._name = a ,this._surname] = a.split(" ") },
};
console.log(person.fullname);
person.fullname = 'Will Smith';
person._age = 11;       // WRONG
console.log(person);
person.age = 40;        // WRIGHT
console.log(person);

let person = { 
    _age:22,    
    _name:"pepe", 
    get age()     { return this._age},      // SETTER  
    set age(a)     {  this._age = a },    // GETTER 
};
person._age = 11;           // WRONG
person.age  = 22;           // RIGHT
console.log(person._age);   // WRONG
console.log(person.age);    // RIGHT