// https://leetcode.com/problems/coin-change/solution/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let maxNumber = amount + 1;

    // Fill the array with max number as we need to find the min number of coins and comparison will be done
    // with max number.
    let dp = Array(amount + 1).fill(maxNumber);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }

    return dp[amount] !== maxNumber ? dp[amount] : -1;
};