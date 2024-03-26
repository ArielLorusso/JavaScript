// method chaining = calling one method after another
//                   in one continuous line of code

let userName = "bro";

/*
    let letter = userName.charAt(0)
    letter = letter.toUpperCase()
    letter = letter.trim();
*/

let letter = userName.charAt(0).toUpperCase().trim();   // SAME



console.log(letter);