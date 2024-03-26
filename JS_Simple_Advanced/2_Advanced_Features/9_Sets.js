const newNumber = 8
function Log(...args) { console.log(...args);} // shorten to Log()
/////////////////////////////////////////////////////// ARRAY
let myArray = [1,2,3,4,5,4,3]
if( !myArray.includes(newNumber) ) {
    myArray.push(newNumber)
}
Log(myArray )                   // [ 1, 2, 3, 4, 5, 4, 3, 8 ]               
Log(myArray.includes(3))        // true                  
Log(myArray.find((e) => { return (e==3 || e==4) })) // 3
//returns first element in condition.
Log(myArray.filter((e) => e==3 || e==4)) // [3,4,4,3] Returns all elements in condition
Log(myArray=[])                  // [] clear by garbage collector 
Log(myArray.push(...[0,1,2,3,4]))// 5 = length (adds to end)
Log(myArray.pop())               // 4   (get & delete last  element)
Log(myArray.slice(-2))           // [ 2,3 ] get & delete last 
Log(myArray.splice(-2))          // [ 2,3 ] get & delete last 
Log(myArray)                     // [ 0,1 ]

/////////////////////////////////////////////////////// SET 
const mySet = new Set([1,2,3,4,5,4,3]) // DELETES DUPLICATES
mySet.add(7)
console.table( mySet)              // Set(6) { 1,2,3,4,5,7 }
Log( mySet.has(1) )      // true 
Log( mySet.delete(2) )   // true
Log( mySet.clear() )     // undefined
Log( mySet.add([1,2,3])) // undefined
Log( mySet)              // [1,2,3]
//////////////////////////////////////////// Excersice 

function removeDups(array){
    let set = new Set(array)
    return Array.from(set)
}
Log(removeDups([1,2,3,3,2,1]) )

//////////////////////////////////////////// LOG LITERAL OBJ MAP 
const obj = {   a:1,
                b:2, c: {d:4,e:5},f:5 }
const map = new Map ([  [1,"A"],
                        [2,"B"],]) 
console.log(  `│${     Array.from(map) }`)
console.log(  `│${ Object.entries(obj) }`)
function flattenObject(obj, parentKey = "") {
    let result = {};
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const nestedObj = flattenObject(obj[key], `${parentKey}${key}.`);
        result = { ...result, ...nestedObj };
      } else {
        result[`${parentKey}${key}`] = obj[key];
      }
    }
    return result;
}
console.log(`│${Object.entries(flattenObject(obj))}`);
  