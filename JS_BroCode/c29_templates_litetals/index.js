// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

let userName = "Bro";
let items = 3;
let total = 75;

    //regular way of print

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

    // imbed variables using literals

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

    // asigning template to a variable

let text = 
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;


//console.log(text);
document.getElementById("myLabel").innerHTML = text;