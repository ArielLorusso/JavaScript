// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
let input = window.prompt("Enter name");  

nameTag.innerHTML = input;          // VULNERABLE ! --> ` " VIRUS `
document.body.append(nameTag);

nameTag.textContent = "Bro";        // SECURE !     --> " "
document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);
myList.prepend(listItem);       // cancels append()... last action is valid
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
