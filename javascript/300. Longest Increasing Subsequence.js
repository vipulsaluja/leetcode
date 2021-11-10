// https://leetcode.com/problems/longest-increasing-subsequence/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let dp = Array(nums.length).fill(1);
	let longest = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				// Either dp holds the maximum already
				// or max upto j and include 1 for i.
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
		longest = Math.max(longest, dp[i]);
	}

	return longest;
};