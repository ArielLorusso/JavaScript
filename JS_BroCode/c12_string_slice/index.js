// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

firstName = fullName.slice(0, 3);   // ( start , end + 1)  = { 0 1 2 }
lastName = fullName.slice(4);       // ( start)
console.log(firstName);
console.log(lastName);

                                    // indexOf(" ") = 5
firstName = fullName.slice(0, fullName.indexOf(" "));   // 0,1,2,3,4
lastName = fullName.slice(fullName.indexOf(" ") + 1);   // 6,7,8,9
console.log(firstName);
console.log(lastName);
console.log(fullName.indexOf(" "));