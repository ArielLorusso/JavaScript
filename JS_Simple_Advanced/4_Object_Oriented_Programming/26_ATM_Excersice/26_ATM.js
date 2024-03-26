console.clear()


// 1) ASK ACCOUNT
// 2) IF ! EXIST CREATE 
// 3) SHOW MENU : View Witdraw Deposit 
// 4) execute

// Account = require("./Account")           // CJS Common JavaScrupt 
import {Account} from "./Account.js"        // ESM ECMAScript module
/*  PAKAGE SUPPORT ?
    BROWSER ESM yes 
            CJS no supperted ?

    NODE    CJS default  :  Node  26_ATM.js  
            ESM requires :  Node --version > 12 
                            Node --experimental-modules 26_ATM.mjs

    BUN     ESM }
*/
let  user1 = new Account
// const readLine = require("readline")      // CJS
// const rl = readLine.createInterface({....
import { createInterface } from 'readline';  //  ESM import
const rl = createInterface({        // ECMAScript-Module to read from stdin
    input: process.stdin,
    output: process.stdout,
});


rl.question("Witch  account will you acces ? \n", //, console.clear()
    answer => {console.log(answer)
    rl.close()
})

/*
    class ATM{
        constructor(account, money){
            this.money = money;
        }
        set money(ammount) {this.money=ammount}
        view = () =>{
        }
    }
 */
