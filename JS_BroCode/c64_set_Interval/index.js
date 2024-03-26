// setInterval() = invokes function repeatedly after num of milliseconds
//                    asynchronous function (doesn't pause execution) 

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
console.log("max:"+max);


const myTimer = setInterval(countUp, 1000);     // intervalID = setInterval()
//https://developer.mozilla.org/en-US/docs/Web/API/setInterval

function countUp(){
    ti = window.performance.now();
    count+=1;
    console.log(count);
    if(count >= max){
        let ans = prompt("reset? :'y' 'n");
        if(ans == 'y'){
            alert("YES")
            clearTimeout(myTimer); 
            return;}                            // clearTimeout(intervalID)
        // https://developer.mozilla.org/docs/Web/API/clearTimeout */
            //cancels a timeout previously established by calling setTimeout().
        clearInterval(myTimer);                 // clearInterval(intervalID)
        // https://developer.mozilla.org/docs/Web/API/clearInterval
            //cancels a timed, repeating action which was previously established by a call to setInterval().
        
    }
    now = window.performance.now()- ti;
    console.log (`Delay = :  ${now} μs`);
}