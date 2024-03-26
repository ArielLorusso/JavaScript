let x;
let y;
let z;



document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

    console.log(Math.random());
    // Expected output: a number from 0 to <1

}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random