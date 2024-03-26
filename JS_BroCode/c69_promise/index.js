// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods
//           "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// ------------- Example 1 -------------     // PRODUCING
// we create an object promise with method as constructor
const promise = new Promise((resolve, reject) => {
 
    let fileLoaded = true;
    if(fileLoaded)  { resolve("File loaded");   }
    else            { reject("File NOT loaded");}
});
                                            // CONSUMING CODE
// we call chained methods with functions as argument
 promise.then(value => {                         

                        console.log(value);
                        console.log("hola")})   // only when resolve
        .catch(error => console.log(error));   //  when not resolve

// ------------- Example 2 -------------
/*
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));
*/