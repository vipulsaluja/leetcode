// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */


/*
Find the lowest price, and then following highest price.
No point in buying a subsquent lowest price if there is no following highest price that has more profit.
*/

var maxProfit = function (prices) {
	if (!prices || !prices.length) {
		return 0;
	}

	let lowestPrice = prices[0];
	let highestPrice = prices[0];
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		if (lowestPrice > prices[i]) {
			lowestPrice = prices[i];
			highestPrice = 0;
		}

		if (highestPrice < prices[i]) {
			highestPrice = prices[i];

			// Keep max profit upto date as soon as "highest" price so far is found.
			maxProfit = Math.max(highestPrice - lowestPrice, maxProfit);
		}
	}

	return maxProfit;
};