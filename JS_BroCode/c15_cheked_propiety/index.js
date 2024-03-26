
// check asks if checkbox or radiobutton is selected


// we define function and use at same time
document.getElementById("myButton").onclick = function()
{
    // we load all elements as constant objects
    const myCheckBox = document.getElementById("myCheckBox");  
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    // we ask if checkbox  checked
    if(myCheckBox.checked){ 
        console.log("You are subscribed!");
    }
    else{
        console.log("You are NOT subscribed!");
    }
    // we ask if Radiobutton checked
    if(visaBtn.checked){
        console.log("You are paying with a Visa!");
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with a Mastercard!");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with PayPal!");
    }
    else{
        console.log("You must select a payment type!");
    }
}