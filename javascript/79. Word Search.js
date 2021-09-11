// https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let moves = [[-1, 0], [0, -1], [0, 1], [1, 0]];
var exist = function (board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (findWord(board, word, row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};

var findWord = function (board, word, row, col, wordIndex) {
    if (row < 0 || row === board.length || col < 0 || col === board[row].length) {
        return;
    }

    if (board[row][col] !== word[wordIndex]) {
        return
    }

    if (wordIndex === word.length - 1) {
        return true;
    }

    board[row][col] = "#";

    for (let moveIndex = 0; moveIndex < moves.length; moveIndex++) {
        let [rowOffset, colOffset] = moves[moveIndex];
        let found = findWord(board, word, row + rowOffset, col + colOffset, wordIndex + 1);
        if (found) {
            return true;
        }
    }

    board[row][col] = word[wordIndex];
}