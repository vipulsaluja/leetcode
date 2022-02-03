// https://leetcode.com/problems/longest-arithmetic-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
	if (!nums || !nums.length) {
		return 0;
	}

	// Initialize with 1 as 1 is the minimum for sequence length
	// 1 sequence means current element.
	let max = 1;

	// Store longest airthmetic sequence length till index.
	let dp = new Array(nums.length).fill(0).map(() => new Map());
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			let diff = nums[i] - nums[j];

			// See if the element j already had any sequence, otherwise
			// initialize with 2 (current and prev).
			dp[i].set(diff, dp[j].get(diff) + 1 || 2);

			// Keep max upto date.
			max = Math.max(max, dp[i].get(diff));
		}
	}

	return max;
};