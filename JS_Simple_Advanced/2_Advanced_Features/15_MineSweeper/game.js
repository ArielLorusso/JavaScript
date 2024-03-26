
export const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE:   'mine'  ,
    NUMBER: 'number',
    MARKED: 'marked'
}

// LOGIC

// 1 Populate tiles
export function createBoard(boardSize, numberOfMines) { 
    // BOARD = TILE ARRAY
    const board = []
    // MINES ARRAY
    const minePositions = getMinePositions(boardSize, numberOfMines) 


    for (let x=0; x < boardSize ; x++) {
        const row = []
        for (let y=0; y < boardSize ; y++) {
            // CREATE TILES <DIV>
            const element = document.createElement('div')
            element.dataset.status = TILE_STATUSES.HIDDEN
            const tile = { 
                element,
              //   ^?
                x,
                y,
                mine: minePositions.some(
                     positionsMatch.bind(null,{x,y})),
                get status(){ // status getter
                    return this.element.dataset.status
                },
                set status(value){ // status setter
                    this.element.dataset.status = value
                },
            }
            row.push(tile)
            
        }
        board.push(row)
    }
 return board // { } [][]
 //      ^?
}

export function markTile( tile ) {
    if ( tile.status !== TILE_STATUSES.HIDDEN && 
    tile.status !== TILE_STATUSES.MARKED ) {
        return
    }
    if ( tile.status === TILE_STATUSES.MARKED) { 
        tile.status = TILE_STATUSES.HIDDEN  
    }
    else { tile.status = TILE_STATUSES.MARKED }
}

export function revealTile(board, tile){
    if( tile.status !== TILE_STATUSES.HIDDEN) { return ; }
    if (tile.mine){
   //    ^?
        tile.status = TILE_STATUSES.MINE; 
        return ;
    }
    tile.status = TILE_STATUSES.NUMBER; 
    const adjacentTiles = nearbyTiles( board, tile)
    const mines = adjacentTiles.filter( t => t.mine)
    if (mines.length == 0) {
        adjacentTiles.forEach(revealTile.bind(null,board))
    }
    else { tile.element.textContent = mines.length }
    //            ^?
}

export function checkWin(board){
    return board.every(row => {
        return row.every(tile => {
            
            if ( (tile.status === TILE_STATUSES.MARKED &&
                tile.mine ) ||
                tile.status === TILE_STATUSES.NUMBER )
            return ( true )
        }) // EVERY tile resulting hiddeb OR (mark AND tile.mine = TRUE)
        // -> return = TRUE = WIN
    })
}

export function checkLoose(board){
    return board.some(row => {
        return row.some(tile => {
            return tile.status === TILE_STATUSES.MINE // RED MINE REVEALED
        }) // Any tile status revealed mine -> return = TRUE = LOOSE
    })
}


function  getMinePositions(boadSize, numberOfMines){
    const positions = []

    while  (positions.length < numberOfMines){
        const position = {
            x:randomNumber(boadSize),
            y:randomNumber(boadSize)
        }       
        if(!positions.some( positionsMatch.bind(null,position))){
            positions.push(position)
        }
    }
    return positions
} 

function positionsMatch( a, b ){
    return a.x == b.x && a.y == b.y 
}

function randomNumber( size){
    return Math.floor(Math.random()* size )
}

function nearbyTiles(board,{x,y}) {
    const tiles = []

    for( let xOffset = -1; xOffset <=1; xOffset++){
        for( let yOffset = -1; yOffset <=1; yOffset++){
            const tile = board [x + xOffset] ?. [y + yOffset]
            if(tile ) {tiles.push(tile)}
        }
    }

    return tiles
}
// 2 Left clisck tiles
    // a. reveal
// 3 roght click tiles
    // a. mark
// 4 check Win / Loose   