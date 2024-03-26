const myDiv = document.getElementById("myDiv");
let upKeyState = false,
  dowmKeyState = false,
 rightKeyState = false,
  leftKeyState = false;
let  x = 0,  y = 0;
/////////////////////////////////  SET  FLAG    /////////////////////
window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp")    { upKeyState    = true;  }
  if (event.key === "ArrowDown")  { dowmKeyState  = true;  }
  if (event.key === "ArrowRight") { rightKeyState = true;  }
  if (event.key === "ArrowLeft")  { leftKeyState  = true;  }});
window.addEventListener("keyup", function (event) { ////////////////
    if (event.key === "ArrowUp")    { upKeyState    = false; }
    if (event.key === "ArrowDown")  { dowmKeyState  = false; }
    if (event.key === "ArrowRight") { rightKeyState = false; } // show kwy once released
    if (event.key === "ArrowLeft")  { leftKeyState  = false; }  console.log(event.key)});
//////////////////////////////////  CHECK FLAG  /////////////////////
function checkUpKey() {
    if (upKeyState)     { y-=10;   myDiv.style.top  = y + "px";   } 
    if (dowmKeyState)   { y+=10;   myDiv.style.top  = y + "px";   } 
    if (leftKeyState)   { x-=10;   myDiv.style.left = x + "px";   } 
    if (rightKeyState)  { x+=10;   myDiv.style.left = x + "px";   } 
    if( myDiv.style.top  < 0) {myDiv.style.top  = 0}
    if( myDiv.style.left < 0) {myDiv.style.left = 0}
}
setInterval(checkUpKey, 1); // 10ms speed