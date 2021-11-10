// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	if (nums.length < 2) {
		return [];
	}

	let complimentMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (complimentMap.has(target - nums[i])) {
			return [complimentMap.get(target - nums[i]), i];
		}

		complimentMap.set(nums[i], i);
	}

	return [];
};