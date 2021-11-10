// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let dp = Array.apply(null, { length: m }).map(() => { return new Array(n).fill(0) });

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (row === 0) {
				dp[row][col] = 1;
				continue;
			}

			if (col === 0) {
				dp[row][col] = 1;
				continue;
			}

			dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
		}
	}

	return dp[m - 1][n - 1];
};