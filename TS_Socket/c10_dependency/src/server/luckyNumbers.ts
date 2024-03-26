export default class LuckyNumbersGame {
    // HASH MAP  SocketID : Lucky_number
    public LuckyNumbers: { [id: string]: number } = {}
    // VOID CONSTRUCTOR
    constructor() {}

    // ARGUMENT: number    RETURNS: string[]
    public GetWinners(number: number): string[] {
        // INIC an empty winner list to return 
        let winner: string[] = []
        // for every ID_VALUE key ... if metched with lucky number 
        for (let key in this.LuckyNumbers) {
            // Check  number == LuckyNumbers[key]
            if (number === this.LuckyNumbers[key]) 
            {   // APPEND to winner list the key (SocketID)
                winner.push(key)
            }
        }   return winner
    }
}
