// https://leetcode.com/problems/path-with-maximum-minimum-value/
// tags: BFS, DP
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function (grid) {
    let dp = [...Array(grid.length)].map(() => Array(grid[0].length).fill(0));

    let directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    let queue = [[0, 0]];
    dp[0][0] = grid[0][0];

    while (queue.length) {
        let [currX, currY] = queue.shift();
        directions.forEach((direction) => {
            let [newX, newY] = [currX + direction[0], currY + direction[1]];

            if (!(newX < 0 || newX === grid.length || newY < 0 || newY === grid[0].length)) {
                let score = Math.min(grid[newX][newY], dp[currX][currY]);
                if (score > dp[newX][newY]) {
                    dp[newX][newY] = score;
                    queue.push([newX, newY]);
                }
            }
        });
    }

    return dp[dp.length - 1][dp[0].length - 1];
};