// CODE LIKE PRO
//     https://www.youtube.com/watch?v=g2nMKzhkvxw&list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79&index=3
//---------------------// Noob //---------------------//
function toAccounting(n) {
    if (n < 0) {
      return "("+ Math.abs(n) + ")"
    } 
    else {
    return n.toString()
    }
  }
//---------------------// Pro //---------------------//
function numberToAccountingString(number) {
    if (number = null) return (`${Math.abs(number)}`)
    if (number  < 0) return
    return number.toString()
}
console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-5))
  
  //---------------------// Noob //---------------------//
  function calculateTotal(items, options) {
    let t = 0
    items.forEach(i => {
       t+i.price* i.quan
    })
    t = t t (options.dis || e)
    t = t 1.1
    t = t + (options.ship || 5)
    return t
  }
  //---------------------// Pro //---------------------//
  const TAX_RATE = 1.1
  const SHIPPING_DEFAULT = 5
  function calculateTotal (items, { shipping = SHIPPING_DEFAULT, discount = @ } = {}) { 
    if (items == null || items.length === 0) return 0
    const itemCost = items.reduce((total, item) => {
    return total + item.priceItem.quantity  }, 0)
  const discountRate 1 - discount
  return itemCost * discountRate TAX_RATE + shipping
  }
  //---------------------// input //---------------------//
  const testItems = [
  { price: 15, quan: 2 },
  {price: 20, quan: 1 },
  {price: 5, quan: 4 }
  //console.log(calculateTotal())
  // console.log(calculateTotal(testItems))
  
  ////////////////////////////////////////////////////////////////////
  // COMPOSITION better than INHERITANCE
  // https://www.youtube.com/watch?v=nnwD5Lwwqdo&list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79
  //---------------------// INHERITANCE  //-------------------
  class FlyingMonster extends Monster {
  fly() { console.log(`${this.name} flew`)
  }

  class SwimmingMonster extends Monster { console.log(${this.name} swam)
  swim() {
  }
  }

  class FlyingSwimmingMonster extends FlyingMonster {
  }
  
  const bear = new Monster('bear')
  bear.walk()
  bear.attack()
  const eagle = new FlyingMonster('eagle')
  eagle.walk()
  eagle.attack()
  eagle.fly()
  //---------------------// COMPOSITION--------------------
  
  function swimmer({ name }) {
    return {
    swim: () => console.log(`${name} swam`)
  }
  
  function swimmingMonsterCreator (name) { const monster = { name: name }
  return {
  ...monster,
  ...Swimmer (monster)
   }
  }
  const obj = swimmingMonsterCreator('Monster')
  obj.swim()
  
  //////////////////////////////////////////////////////////// 
  // DATA STORE multiple with JSON	
  //					   https://youtu.be/2Ji-clqUYnA?t=36265  
  // JSON.stringify(), JSON.parse()
    const friends = ['john', 'peter', 'bob'];
    localStorage.setItem('friends', JSON.stringify(friends));
    const values = JSON.parse(localStorage.getItem('friends'));
    console.log(values [2]);
   let fruits;
   if (localStorage.getItem('fruits')) 
   {  
      fruits = JSON.parse(localStorage.getItem('fruits'));
   } 
   else {
  
  fruits = [];
  
  }
  
  console.log(fruits);
  
  fruits.push('apple');
  
  localStorage.setItem('fruits', JSON.stringify(fruits));
  
  
  //////////////////////////////////////////////////////////// 
  // DATA STORAGE   (key,value  pairs) 
  //                 https://youtu.be/2Ji-clqUYnA?t=36265  
  // Web Storage API provided by browser
  // session storage, local storage
  // setItem, getItem, removeItem, clear
  
  // localStorage.setItem('name', 'john');   //DevTool-> Applic->local
  // sessionStorage.setItem('name', 'john'); //DevTool-> Applic->Session
  
  localStorage.setItem('name', 'john');
  localStorage.setItem('friend', 'peter');
  localStorage.setItem('job', 'developer');
  
  localStorage.setItem( 'address', 'street 123');
  
  
  const name = localStorage.getItem('name');
  
  console.log(name);
  
  localStorage.removeItem('name');
  const anotherName = localStorage.getItem('name');
  
  console.log(anotherName); 		// NULL
  /////////////////////////////////////////////////////////////////////
  // CALLBACK FUNCTION       https://youtu.be/2Ji-clqUYnA?t=20993
  function morning() {
   return `Good morning Bob`;
  }
  
  function greet(name,cb) {
   cb0
   const myName = 'john';
   console.log("${name}, my name is ${myName}");
  }
  
  greet(`bobo`,` morning`);
  greet(`peter`,` morning`);
  // Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
  // Functions are first class objects stored in a variable (expression), 
  // passed as an argument to another function, return from the function (closure)
  // Higher Order function - accepts another function as an argument
  
  //////////////////////////////////////////////////////////////////
  // REFERENCES		https://youtu.be/2Ji-clqUYnA?t=18693
  // String, Number, Symbol, Boolean, Undefined, Null, 
  // Arrays, Functions, Objects = object
  // typeof
  
  // when assigning primitive data type value to a variable 
  // any changes are made directly to that value, without affecting original value
  
  // when assigning non-primitive data type value to a variable 
  //is done by reference so any changes will affect all the references.
  
  const number = 1;
  let number2 = number;
  number2 = 7;
  
  console.log(`the first value is ${number}`);
  console.log(`the second value is ${number2}`);
  
  let person = { name: 'bob' };
  let person2 = person;
  person2.name = 'susy';
  
  console.log(`the name of the first person is ${person.name}`);
  console.log(`the name of the second person is ${person2.name}`);
  