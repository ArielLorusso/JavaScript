// async = makes a function return   a Promise
// await = makes a function wait for a Promise

                            // similarities qith previous video 69
async function loadFile(){
    let fileLoaded = true;
    if(fileLoaded)  { return "File loaded";}          // Promise.resolve()
    else            { throw "File NOT loaded"; }      // Promise.reject()
}
 
loadFile().then(value => console.log(value))          // Promise.thrn()
                 .catch(error => console.log(error));
