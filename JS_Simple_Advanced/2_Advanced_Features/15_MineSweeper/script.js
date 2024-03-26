import {TILE_STATUSES, createBoard, markTile,
        revealTile, checkLoose, checkWin } from "./game.js" 


var BOARD_SIZE =  10;   // want it to be set by an HTML input
var NUMBER_OF_MINES = 2 // <input type="number" id="board_size" ><>

const board_size =  document.getElementById("board_size");
const num_mines  =  document.getElementById("mines");
const start      =  document.getElementById("start");
let board = createBoard(BOARD_SIZE,NUMBER_OF_MINES) // boardSize, numberOfMines

start.addEventListener('click',() => {
    deleteBoard(board)
    // CREATE BOARD GRID = {Obj}[][] + MINES
    BOARD_SIZE      = board_size.value;
    NUMBER_OF_MINES =  num_mines.value;
    board = createBoard(BOARD_SIZE,NUMBER_OF_MINES) 
    // OUT LAYER STYLE
    boardElement.style.setProperty("--size",BOARD_SIZE)
    // START GAME 
    showBoard(board)  // Make HTML DIVS 
    // RE-ENABLE CLICK
    boardElement.removeEventListener("click", stopProp, { capture: true });
    boardElement.removeEventListener("contextmenu", stopProp, { capture: true });
  });
  



const boardElement = document.querySelector('.board')
const minesLeftText = document.querySelector('[data-mine-count]')
const messageText =  document.querySelector('.subtext')

console.log(board)

// SHOW BOARD + EVENT LISTENERS = START GAME
function showBoard(board) {
    board.forEach(row => {
        row.forEach(tile =>{
            boardElement.append(tile.element)
            // EVENT  Left clisck tiles (show) 
            tile.element.addEventListener("click", () => {
                revealTile(board,tile) // show tile
                checkGameEnd()
            })
            // EVENT  Right clisck tiles (MARK)
            tile.element.addEventListener("contextmenu", e => {// 3) roght click tiles
                e.preventDefault()  // prevents second click menue on tiles 
                markTile(tile)      // Mark
                listMinesLeft()     // mine left
                checkGameEnd()
            })
        })
    })
}


// DELETE BOARD
function deleteBoard(board) {
    board.forEach(row => {
        row.forEach(tile => {
            // Remove the tile's element from the DOM
            tile.element.remove();
        });
    });

    // After removing all elements, you can clear the board array
    board = [];

    // You might also want to reset the message text and mines left count
    messageText.textContent = '';
    minesLeftText.textContent = '';
}

// BOARD STYLE
boardElement.style.setProperty("--size",BOARD_SIZE)
minesLeftText.textContent = NUMBER_OF_MINES

// UPDATE MINE INDICATOR
function listMinesLeft( ) {
    const markedTilesCount =  board.reduce((count,row) => {
        return count + row.filter(tile => tile.status ===TILE_STATUSES.MARKED).length
    },0)
    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
}
// CHECK GAME
function checkGameEnd() {
    const win = checkWin(board)
    const loose = checkLoose(board)

    if (win|| loose){ // Tiles no longuer selectable
        boardElement.addEventListener("click",stopProp,{capture:true})
        boardElement.addEventListener("contextmenu",stopProp,{capture:true})
    }
    if(win)     { 
        messageText.textContent = "YOU WIN";   
  
        board.forEach(row => {
            row.forEach(tile =>{
                
                if(tile.mine) {
                    // unmark
                    if(tile.status == TILE_STATUSES.MARKED){ markTile(tile)}
                    // show
                    revealTile(board,tile)}
            })
        })
    }
    if(loose)   { 
        messageText.textContent = "YOU LOOSE";
        board.forEach(row => {
            row.forEach(tile =>{
                
                if(tile.mine) {
                    // unmark
                    if(tile.status == TILE_STATUSES.MARKED){ markTile(tile)}
                    // show
                    revealTile(board,tile)}
            })
        }) 
    }
}
function stopProp(e) {
    e.stopImmediatePropagation()
}

