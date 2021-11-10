// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (!nums.length) {
		return 0;
	}

	if (nums.length === 1) {
		return nums[0];
	}

	if (nums.length === 2) {
		return Math.max(...nums);
	}

	let robLastToLast = nums[0];
	let robLast = Math.max(nums[0], nums[1]);

	for (let i = 2; i < nums.length; i++) {
		let current = Math.max((nums[i] + robLastToLast), robLast);

		robLastToLast = robLast;
		robLast = current;
	}

	return robLast;
};