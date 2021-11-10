// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n < 3) {
		return n;
	}

	// Bottom up approach using DP.
	// Either take 1 step and use previous step's ways.
	// Or take 2 steps and use previous to previous step's ways.
	// Add both to get the ways of current size stairs.
	// Hence only 2 slots are needed.
	let dp = new Array(2).fill(0);

	dp[0] = 1; // Only 1 way to climb stairs of size 1.
	dp[1] = 2; // Only 2 ways to climb stairs of size 2.

	for (let i = 2; i < n; i++) {
		let ways = dp[0] + dp[1];
		dp.push(ways);
		dp.shift();
	}

	return dp[1];
};