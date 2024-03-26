// NPM :
// https://bluuweb.github.io/node/01-fundamentos/#npm-node-package-manager
// https://docs.npmjs.com/cli/v6/commands
// https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/

// CREAR  PACKAGE.JSON 
//
// npm init -y  
// https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
// package.json :  "main": "c4_Package.js",

// INSTALLAR PRIMER PACKAGE
//
// npm install <package-name>
// <package-name> = cowsay  https://www.npmjs.com/package/cowsay
//
// npm i cowsay


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I  say",
    e : "oO",
    T : " U"
}));

console.log(cowsay.think({ text : "Ithink"}));
