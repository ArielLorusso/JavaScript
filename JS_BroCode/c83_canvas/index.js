let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let FPS = 2;  let draw =0;
let framerate = Math.floor(1000/FPS);

timerId = setInterval(frame, framerate);

function frame()    {  //  SHOW DRAWINGS
    context.clearRect(0, 0, canvas.width, canvas.height);  
    draw = (draw +1 )% 6;
    switch(draw){
        case 0 : { drawLines();     break;}
        case 1 : { drawTriangle();  break;}
        case 2 : { drawRectangle(); break;}
        case 3 : { drawCircle();    break;}
        case 4 : { drawText();      break;}
        case 5 : { drawRectangle()
                   drawCircle();     
                   drawText();      break;}
    }
    console.log(draw);
}

function drawLines()    { // DRAW LINES
    context.strokeStyle = "purple";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(250, 250);
    context.lineTo(250, 500);
    context.moveTo(500, 0);
    context.lineTo(250, 250);
    context.stroke();
}
function drawTriangle() { // DRAW TRIANGLE
    context.strokeStyle = "grey";
    context.fillStyle = "yellow";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(250, 0);
    context.lineTo(0, 250);
    context.lineTo(500, 250);
    context.lineTo(250, 0);
    context.stroke();
    context.fill();
}
function drawRectangle(){ // DRAW RECTANGLE
    context.fillStyle = "black";
    context.fillRect(0, 0, 250, 250);
    context.strokeStyle = "black";
    context.strokeRect(0, 0, 250, 250);
    
    context.fillStyle = "red";
    context.fillRect(0, 250, 250, 250);
    context.strokeStyle = "black";
    context.strokeRect(0, 250, 250, 250);

    context.fillStyle = "green";
    context.fillRect(250, 250, 250, 250);
    context.strokeStyle = "black";
    context.strokeRect(250, 250, 250, 250);

    context.fillStyle = "blue";
    context.fillRect(250, 0, 250, 250);
    context.strokeStyle = "black";
    context.strokeRect(250, 0, 250, 250);
}
function drawCircle(x)  { // DRAW CIRCLE
    //(x, y, r, sAngle, eAngle, counterclockwise)
    context.fillStyle = "lightblue";
    context.strokeStyle = "darkblue";
    context.lineWidth = 10;
    context.beginPath();
    context.arc(250, 250, 200, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}
function drawText(x)    { // DRAW TEXT
    context.font = "50px MV Boli";
    context.fillStyle = "grey";
    context.textAlign = "center";
    context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);
}
