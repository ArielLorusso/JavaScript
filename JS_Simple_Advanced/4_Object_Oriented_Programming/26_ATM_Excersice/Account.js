// module.export =      // ESM (Browser)
// export               // CJS (Node)

class Account{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

//              ESM
export default Account;

//              CJS
module.exports = Account;
