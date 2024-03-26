// console.time() = Starts a timer you can use to 
//                  track how long an operation takes
//                  Give each timer a unique name.

let ti = window.performance.now();

// for miliseconds in console
        //start
        console.time("Response time");
        alert("CLICK THE OK BUTTON!");  // mesure the time of button
        //end
        console.timeEnd("Response time"); 


let tf = window.performance.now();      
console.log (`Delta Time :  ${(tf-ti)} ms`);    // For HTML edit
document.getElementById("time").innerHTML=`Delta Time :  ${(tf-ti)} ms`

