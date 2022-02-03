// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	if (!prices.length) {
		return 0;
	}

	let dp = Array.apply(null, { length: k + 1 }).map(() => { return Array(prices.length).fill(0); });

	for (let transaction = 1; transaction <= k; transaction++) {
		let max = Number.NEGATIVE_INFINITY;
		for (let day = 1; day < prices.length; day++) {
			max = Math.max(max, dp[transaction - 1][day - 1] - prices[day - 1]);
			dp[transaction][day] = Math.max(dp[transaction][day - 1], max + prices[day]);
		}
	}

	return dp[k][prices.length - 1];
};