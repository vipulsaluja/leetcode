/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            calculateNextState(board, row, column);
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            board[row][column] %= 2;
        }
    }
};

var calculateNextState = function (board, row, column) {
    let aliveCount = getNeighborAliveCount(board, row, column);
    if (board[row][column] === 0) {
        if (aliveCount === 3) {
            board[row][column] = 3;
        }
    } else {
        if (aliveCount < 2 || aliveCount > 3) {
            board[row][column] = 2;
        }
    }
}

var getNeighborAliveCount = function (board, row, column) {
    return getCellValue(board, row - 1, column - 1) +
        getCellValue(board, row - 1, column) +
        getCellValue(board, row - 1, column + 1) +
        getCellValue(board, row, column - 1) +
        getCellValue(board, row, column + 1) +
        getCellValue(board, row + 1, column - 1) +
        getCellValue(board, row + 1, column) +
        getCellValue(board, row + 1, column + 1);
}

var getCellValue = function (board, row, column) {
    if (row < 0 || column < 0 || row > board.length - 1 || column > board[0].length - 1) {
        return 0;
    }

    if (board[row][column] === 1 || board[row][column] === 2) return 1;

    return 0;
}