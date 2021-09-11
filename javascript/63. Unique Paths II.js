// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (!obstacleGrid || !obstacleGrid.length || !obstacleGrid[0].length) {
        return 0;
    }

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    let targetRowIndex = obstacleGrid.length - 1;
    let targetColIndex = obstacleGrid[0].length - 1;
    if (obstacleGrid[targetRowIndex][targetColIndex] === 1) {
        return 0;
    }

    let dp = Array.apply(null, { length: obstacleGrid.length }).map(() => new Array(obstacleGrid[0].length).fill(0));
    dp[targetRowIndex][targetColIndex] = 1;

    for (let row = targetRowIndex; row >= 0; row--) {
        for (let col = targetColIndex; col >= 0; col--) {
            if (row === targetRowIndex && col === targetColIndex) {
                dp[row][col] = 1;
                continue;
            }
            if (row === targetRowIndex) {
                dp[row][col] = obstacleGrid[row][col] === 0 ? dp[row][col + 1] : 0;
                continue;
            }

            if (col === targetColIndex) {
                dp[row][col] = obstacleGrid[row][col] === 0 ? dp[row + 1][col] : 0;
                continue;
            }

            dp[row][col] = obstacleGrid[row][col] === 0 ? dp[row + 1][col] + dp[row][col + 1] : 0;
        }
    }

    return dp[0][0];
};

