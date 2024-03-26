// DESTRUCTURE : acces elemeents of obj, array, etc 
// in a simple/intuitive way
//::::::::::::::::::::::::::::::::::
//⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕
//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
//▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
//██████████████████████████████████
//   cd Advanced_Features/
//   bun 2_Destructuring.js    bun > node
    const array_a = ['a','b','c','de',['e','f'] ];
    const person = {
        name:"pepe",
        age: 11,
        food: "yes plz",
        adress : {      // NESTED OBJ
            street:"Av yomama",
            city: "Springf",      
            zipcode: "5353"     } 
    };
// ARRAY NOOB SEPATION
{
    let com_1st = array [0]
    let com_2nd = array [1]
    
    // let com_1st = array[0] , com_2nd = array[1] 
}
// DESTRUCTURING ARRAY
{
    let [ des_1, des_2, , des_4, des_5, des_6 ]
        = array_a; // skip elements 3 & 5

    let[,,,[,des_nest]] = array_a // array nested destruct

    console.log(des_1)  //  a
    console.log(des_2)  //  b
    console.log(des_4)  //  de
    console.log(des_5)  //  ["e","f"]
    console.log(des_6)  //  undefined
    console.log(des_nest)  //  e
    console.log(des_5[0] == des_nest)  //  true
}
// DESTRUCTURE A FUNCT RETURN 
{
    function addMultiply(a,b) {
        return [ a + b , a * b ]
    }
    // NORMAL ASSIGNATION
    const result = addMultiply( 2, 3 ) 

    console.log(result[0]+" = 2 + 3")  // 5 = 2 + 3
    console.log(result[1]+" = 2 * 3")  // 6 = 2 * 3
    console.log(result[2]  )           // undefined 
    console.log(result  )              // [ 5, 6 ]
    
    // DESTRUCTURED ASSIGNATION
    const [sum,prod] = result;

    console.log(sum )              // 5
    console.log(prod)              // 6 
}
// DESTRUCTURE OBJECT
{   
    // DESTRUCTURING OBJ person:
        const { food:newName, 
                adress,  
                adress:{ city:mCity } } = person
        //  [newName, adress, mCity ] = [food, adress, city]
        //  adress:{city} is a nested de-structuring
        //  in stead of the new name we de-struct {city} as mCity

    // DESTRUCTURING NESTED OBJ adress:
        const {street, zipcode='123'} = adress
        // if zipcode does not exist its value will be ='123' as default
    console.log(newName)   // yes plz
    console.log(mCity)     // Springf
    console.log(street)    // Av yomama
    console.log(adress)    // street: "Av yomama", city: "Springf"
    console.log(adress.city == mCity)    // true
    console.log(zipcode)    // 5353
}
// EXCERSICE
{   // JS memorize method   TS fullName:string  -> slpit method  sugested 
    function name2FirstAndLast(fullName){
        let [a,b] = fullName.split(" ")
        return { name1 : a,
                 name2 :  b }  // return obj
    }
    const {name1,name2} = name2FirstAndLast('Pepe Arg')
    console.log(name1)    // Pepe
    console.log(name2)    // Arg
}
// DESTUCTURE FUNCT ARGUMENT
{   
    // BAD
        // function addMultiply(options) { // OBJ as argument 
        //     const a = options.a
        //     const b = options.b
        //     return [a+b, a*b]
        // }
        function addMultiply({a,b}) { // DESTRUCTURE arguments     
            return [a+b, a*b]
        }
    const [sum,prod] = addMultiply({ a:2, b:3})
    console.log(sum,prod)    // Arg
    
}
