// https://leetcode.com/problems/valid-tic-tac-toe-state/
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    let countX = 0;
    let countO = 0;
    for(let row=0; row<board.length; row++) {
        for(let col=0; col<board[0].length; col++){
            if(board[row][col]==="X"){
                countX++;
                continue;
            }
            
            if(board[row][col] === "O"){
                countO++;
            }
        }
    }
    
    // X plays first, so O can never have more turns than X.
    if(countO > countX) {
        return false;
    }
    
    // Since players have alternative turns, the difference between moves cannot be more than 1.
    let countDiff = Math.abs(countX-countO);
    if(countDiff > 1) {
        return false;
    }
    
    let winnerX = checkWinner(board, "X");
    let winnerO = checkWinner(board, "O");
    
    // Both X and O can never be winners.
    if(winnerX && winnerO){
        return false;
    }
    
    // The winner must have last move.
    // So if X is winner, then X must have more turns than O.
    if(winnerX && countDiff !== 1){
        return false;
    }
    
    // And O must have equal turns.
    if(winnerO && countDiff !== 0) {
        return false;
    }
    
    return true;
};

var checkWinner = function(board, char){
    return winPositions.some((position) => {
        return isWinner(board, position, char);
    });
};

var isWinner = function(board, coords, char) {
    return coords.every(coord => {
        return getMove(board, coord) === char;
    });
}

var getMove = function (board, coord) {
  const row = Math.floor(coord / 3);
  const col = coord % 3;
  
  return board[row][col];
}

const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  
  [0, 4, 8],
  [2, 4, 6],
];