// SPREAD :    
// ...  is a operator that lets you spread out 
// all the elements  of an array or object. 
//    
// use the spread operator to combine 
// multiple arrays together.
// https://blog.webdevsimplified.com/2020-08/destructuring-and-spread/

const array = ["A", "B", "C", "D", "E"]
{    
        const array1 = [1, 2, 3]
        const array2 = [4, 5, 6]
        const newArray = [...array1, ...array2] // SPREAD

        console.log(newArray)  // [1, 2, 3, 4, 5, 6]

// REST: 
//  Deconstruct + Spread op = REST 
//  used to get remaining elements of an array or obj
    
    const [first, second, ...rest] = array // REST
    // rest operator must be last element
    
    console.log(first)   // A    
    console.log(second)  // B
    console.log(rest)    // ['C', 'D', 'E']
    console.log(rest[rest.length-1])    // E
}
    

///////////////////////

function sum(numbers) {     // numbers : variable
    return numbers.reduce((sum,number) => sum + number, 0)
}
console.log(sum([2,3,4,5,6,7])) // 27

function sum2(...numbers) { // numbers : array  REST
    let n = [1,...numbers]  // SPREAD
    return n.reduce((sum,number) => sum + number, 0) 
}
console.log(sum2(2,3,4,5,6,7)) // 28

const divs = document.querySelectorAll(".div")
console.log(divs) 

divsArray = [...divs] //  conversion to    array
console.log(divsArray) //                   ⤊
divsArray.map( div => { // now, we can use  array.map() method
    console.log(div)
})