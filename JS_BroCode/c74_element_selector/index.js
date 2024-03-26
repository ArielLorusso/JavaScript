//////////////////////////  BY  ID  //////////////////////////////////
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

//////////////////////////  BY NAME  //////////////////////////////////
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked) { console.log(fruit.value);}
})
//////////////////////////  BY  TAG  //////////////////////////////////
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

//////////////////////////  BY  CLASS  //////////////////////////////////
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";

//////////////////////////  QUERRY    //////////////////////////////////
element = document.querySelector("#myTitle");       // # element
element.style.backgroundColor = "salmon";
element = document.querySelector(".deserts");       //  .class
element = document.querySelector("li");             //  tag : <li>
let elements = document.querySelectorAll("[for]");  //  atributes : for="apple",for="orange",for="orange"
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})
