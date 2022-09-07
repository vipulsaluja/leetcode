// https://leetcode.com/problems/game-of-life/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            nextState(board, row, col);
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            board[row][col] %= 2;
        }
    }
};

var nextState = function (board, row, col) {
    let adjAliveCount = getAdjAliveCount(board, row, col);

    // The dead cell can become alive if there are 3 alive neighbors.
    if (board[row][col] === 0) {
        if (adjAliveCount === 3) {

            // The future alive state.
            board[row][col] = 3;
        }
        return;
    }

    if (adjAliveCount < 2 || adjAliveCount > 3) {
        // Future dead state.
        board[row][col] = 2;
    }
}

const adjPositions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
];

var getAdjAliveCount = function (board, row, col) {
    return adjPositions.reduce((total, [rowOffset, colOffset]) => {
        let adjValue = board[row + rowOffset]?.[col + colOffset];
        if (adjValue === 1 || adjValue === 2) {
            total++;
        }
        return total;
    }, 0);
}