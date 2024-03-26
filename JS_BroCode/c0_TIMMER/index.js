function timer(func,x ){
    let ti = window.performance.now();
    func(x);
    let tf = window.performance.now();
    console.log (`Delta Time :  ${1000*(tf-ti)} ns`);
}

function fun(num){
    a = 20 ;
    let b=0
    for(i=0;i<10000;i++)
    {
        b += (a*Math.random())/num;
    }
    console.log(b);
}

timer(fun,5); // function as arg  https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter

console.log (`End Exec Time :  ${window.performance.now()} μs`);

current =(performance.now() + performance.timeOrigin);
console.log (`current Time : \t${current} μs (Unix time)
corresponds to:\t${Math.floor(current/100000)} seconds`);
// Date.now()                https://www.geeksforgeeks.org/javascript-date-now-method/

// window.performance.now()  https://stackoverflow.com/questions/6002808/is-there-any-way-to-get-current-time-in-nanoseconds-using-javascript
//                           https://www.youtube.com/watch?v=acemrBKuDqw
