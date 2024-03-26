
let username = window.prompt("whats your name")   // easy way 1 use
console.log(username);         
document.getElementById("p1").innerHTML = "students without group " ;


document.getElementById("myButton").onclick = function() {

    username = document.getElementById("myText").value;     // dynamic way  multiple uses
    console.log(username)
    document.getElementById("myLabel").innerHTML = username;
}
