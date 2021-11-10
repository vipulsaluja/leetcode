// https://leetcode.com/problems/combination-sum-iv/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let dp;
var combinationSum4 = function (nums, target) {
	dp = new Map();

	return combs(nums, target);
};

var combs = function (nums, target) {
	if (!target) return 1;

	if (dp.has(target)) {
		return dp.get(target);
	}

	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (target - nums[i] >= 0) {
			count += combs(nums, target - nums[i]);
		}
	}

	dp.set(target, count);

	return count;
}