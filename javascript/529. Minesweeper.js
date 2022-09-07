// https://leetcode.com/problems/minesweeper/
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let [row, col] = click;
    if(board[row][col] === "M"){
        board[row][col] = "X";
    } else {
        mineSweep(board, row, col);
    }
    
    return board;
};

const moves = [
    [-1,-1],[-1,0],[-1,1],
    [0,-1],[0,1],
    [1,-1],[1,0],[1,1],
];

var mineSweep = function(board, row, col){
    let mineCount = 0;
    let queue = [];
    for(let i=0; i<moves.length; i++){
        let [rowOffset, colOffset] = moves[i];
        let [newRow, newCol] = [row+rowOffset, col+colOffset];        
        if(newRow<0 || newRow===board.length || newCol<0 || newCol===board[0].length){
            continue;
        }
        
        if(board[newRow][newCol] === "M"){
            mineCount++;
            continue;
        }
        
        // Need to mineSweep found empty cells in case current cell is empty.
        if(board[newRow][newCol] === "E"){
            queue.push([newRow, newCol]);
        }
    }
    
    board[row][col] = mineCount ? mineCount.toString() : "B";
    if(board[row][col] === "B"){
        queue.forEach(([row,col]) => mineSweep(board, row, col));
    }
}