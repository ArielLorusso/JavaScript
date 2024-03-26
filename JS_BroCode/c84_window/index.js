// window = interface used to talk to the web browser
//          the DOM is a property of the window

//const myButton = document.querySelector("#myButton");

console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href); // IP.Port/c84_window/index.html
console.log(window.location.hostname);  // IP 127.0.0.1
console.log(window.location.pathname);  // c84_window/index.html

/*
window.location.href = "https://google.com";
console.log(window.location.hostname);  // Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'unload'.
console.log(window.location.pathname);    // Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'unload'.
*/

//myButton.addEventListener("click", () => window.open("https://google.com"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());

window.alert("Hello!");
window.confirm("Press OK to coninue!");
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/