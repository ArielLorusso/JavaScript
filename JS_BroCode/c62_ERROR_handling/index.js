// error = object with a description of 
//             something that went wrong

// throw = executes a user-defined error

try{ //
    let x = window.prompt("Enter a number");
    x = Number(x);
  
    if(isNaN(x)) throw "That wasn't a number!"; //Not a Number (NaN)
    if(x == "")  throw "That was empty!";     // trow is like return;
  
    console.log(`${x} is a number`);
  }

  catch(error){             // if ERROR display it
    console.log(error);
  }
  
  finally{                  // usefull to close files when error ocurr
    console.log("This always executes");
  }


  // cant open file
  // bad connection
  // incorrect input