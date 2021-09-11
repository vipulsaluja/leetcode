// https://leetcode.com/problems/design-tic-tac-toe/solution/
/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
    // Store the size of board.
    this.n = n;

    // Tracks which row has occupied by same player.
    // If a row is occupied by same player then count for that row is
    // equal to size of board n.
    this.row = new Array(n).fill(0);

    // If a col is occupied by same player then count for that col is
    // equal to size of board n.
    this.col = new Array(n).fill(0);

    // There are two diagnols in the board, diagonal and anti-diagonal 
    // If the diagonal is occupied by a single player then the
    // value of this is equal to n.
    this.diag1 = 0;
    this.diag2 = 0;

    // Assign opposite signs to player as these values will be used to track
    // the count in rows/cols and diagonals.
    this.player = [0, 1, -1];
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    let sign = this.player[player];

    // Update the row, col for the player.
    this.row[row] += sign;
    this.col[col] += sign;

    // Update the diagonal and anti-diagonal if the position belongs to 
    // any of them.
    if (row === col) this.diag1 += sign;
    if (row + col === this.row.length - 1) this.diag2 += sign;

    // Check if any of the above updated row/col or diagonal has reached the final stage.
    // i.e any player has won the game?
    if (Math.abs(this.row[row]) === this.n ||
        Math.abs(this.col[col]) === this.n ||
        Math.abs(this.diag1) === this.n ||
        Math.abs(this.diag2) === this.n
    ) {
        return player;
    }

    // If no one wins for the current move, return 0.
    return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */