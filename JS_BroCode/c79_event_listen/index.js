
// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true); //useCapture gives preference to 
                                                    // outerDiv to change first

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue"
}
