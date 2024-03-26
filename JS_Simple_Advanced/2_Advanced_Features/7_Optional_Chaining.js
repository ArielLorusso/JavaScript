function Log(...args) { console.log(...args);} // shorten to Log()
const kyle = {
    name: "Kyle",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Somewhere",
        aparment: 35
    },
    sayHi(){Log("Hi")},
    hobies:['chess','music']
}
function printStreet(person) {
    if(person && person.address  ){   // AVOIDS ERROR  (skips undef)
        Log(person.address.street)}     // 123 Main St

    // LOGIC CHAINING
    Log(person &&  person.address &&  person.address.city) 
    // same as (person && (person.address && (person.address.city)))
    // returns last Logic_op argument  ------->  Somewhere" (city) & undef
    // from Left to Right any false will colapse previous && to false

    //OPTIONAL CHAINING
    Log(person ?. address ?. aparment) // 35 & undef
}    

function callSayHi(person) {
    Log(person?.sayHi ? person.sayHi : 0) ;// if !person  print 0
    person?.sayHi ? Log(person.sayHi) : 0 ;// if !person  do nothing 
    person?.sayHi?.();                      // function call if person.sayHi
}
function printHobies(person){
    Log(person?.hobies?.[0])
}

printStreet(kyle)
printStreet(undefined) // TypeError: undefined is not an object 

callSayHi(kyle)
callSayHi(undefined) // 0 

printHobies(kyle)
printHobies(undefined)