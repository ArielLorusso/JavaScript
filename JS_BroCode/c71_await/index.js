// async = makes a function return a Promise
// await = makes a function wait for a Promise
async function loadFile(){
  
  const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    
    if(fileLoaded){
      resolve("File loaded");
    }
    else{
      reject("File NOT loaded");
    }
  })
  
  try{
    document.getElementById("myH1").innerHTML = await promise; // inner function
  }
  catch(error){
    document.getElementById("myH1").innerHTML = error;
  }
}

loadFile();
////////////////////////////////////////////////////////////
/*  //  does not work
    //  Uncaught SyntaxError: await is only valid 
    // in async functions and the top level bodies of modules

async function loadFile(){
  let fileLoaded = true;
  if(fileLoaded)  {return "File loaded";}
  else          {throw "File NOT loaded";}
}
loadFile();

document.getElementById("myH1").innerHTML = await loadFile();
*/