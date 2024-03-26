// cookie = small Text file stored in user computer
//        used to store user name=value dara pairs 

/////////  MANUAL COOKIE  ////////////
document.cookie = "firstName=PEPE;"+
 "expires=Tue, 20 July 2030 12:00:00 UTC; path=/"
document.cookie = "lastName=SPONGE;"
+"expires=Tue, 20 July 2030 12:00:00 UTC; path=/";


/////////  SET COOKIE  ////////////
function setCookie(name, value, daysToLive){
    const date = new Date();                        // miliseconds
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
console.log(document.cookie);
 setCookie("email","pepe@argento.com",7);  // lastName=Argento; firstName=PEPE; email=pepe@argento.com

/////////  DELETE COOKIE  //////////// MoreTools>ClearBrowsingData
function deleteCookie(name){
    setCookie(name, null, null);
}
// deleteCookie("lastName");
console.log(document.cookie);

/////////  GET COOKIE  //////////// 
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

/////////  GET COOKIE  UI  ////////////  # by ID
const firstText = document.querySelector("#firstText");
const lastText  = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 7);
    setCookie("lastName" ,  lastText.value, 7);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
     lastText.value = getCookie("lastName");
});
console.log(document.cookie);