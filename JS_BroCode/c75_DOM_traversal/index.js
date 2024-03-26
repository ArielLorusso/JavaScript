

let element = document.body;
let child = element.firstElementChild;      //  first child is
console.log(child)                          //  unorder list <ul id="fruit"> </ul>
child.style.backgroundColor = "lightgreen";

let sibiling = child.nextElementSibling;    // next sibiling is
sibiling.style.backgroundColor = "salmon";  // unorder list <ul id="vegetables"></ul>


child = element.lastElementChild;        // last child is
console.log(child)                       // < script src=index.js >

child = element.children[2];            // child number 2 is
child.style.backgroundColor = "cyan";   // unorder list <ul id="dessert">


element = document.querySelector("#fruit");
child = element.firstElementChild;          // list item <li> apple </li>
child.style.backgroundColor = "cyan";

let elements = Array.from(document.body.children);
elements[1].children[1].style.backgroundColor="yellow"

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)


// sibiling