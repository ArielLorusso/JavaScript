"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LuckyNumbersGame {
    constructor() {
        this.LuckyNumbers = {};
    }
    GetWinners(number) {
        // 
        let ret = [];
        //
        for (let key in this.LuckyNumbers) {
            // Check  number == LuckyNumbers[key]
            if (number === this.LuckyNumbers[key]) { // APPEND to ret the index
                ret.push(key);
            }
        }
        return ret;
    }
}
exports.default = LuckyNumbersGame;
//# sourceMappingURL=luckyNumbers.js.map