// https://leetcode.com/problems/design-a-leaderboard/submissions/

var Leaderboard = function () {
    this.board = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
    if (!this.board.has(playerId)) {
        this.board.set(playerId, 0);
    }

    this.board.set(playerId, this.board.get(playerId) + score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
    let topReturnCount = Math.min(this.board.size, K);

    // Heap Sort can be implemented instead of this sorting to optimize the solution.
    let totalSum = Array.from(this.board).sort(([playerA, playerAScore], [playerB, playerBScore]) => {
        return playerBScore - playerAScore;
    }).splice(0, topReturnCount).reduce((totalSum, [_, playerScore]) => {
        totalSum += playerScore

        return totalSum;
    }, 0);

    return totalSum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
    this.board.delete(playerId);
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */