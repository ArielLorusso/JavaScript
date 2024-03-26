//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");
const element2 = document.getElementById("myInput");

element2.onchange = doSomething;
//element.onclick = doSomething;
element.onload = doSomething;
element.onmouseover = doYello;
element.onmouseout = doBlack;
element.onmousedown = doRed; // not invocation this is callback function
element.onmouseup = doGreen;



function doSomething()  {alert("You did something!");}
function doRed()        {element.style.backgroundColor = "tomato"}
function doGreen()      {element.style.backgroundColor = "lightgreen";}
function doYello()      {element.style.backgroundColor = "yellow";}
function doBlack()      {element.style.backgroundColor = "black";}