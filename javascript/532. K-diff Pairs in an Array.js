// https://leetcode.com/problems/k-diff-pairs-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
	let numMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (!numMap.has(nums[i])) {
			numMap.set(nums[i], 0);
		}

		numMap.set(nums[i], numMap.get(nums[i]) + 1);
	}

	let kPairs = 0;

	// When k (diff) is zero, then pairs are equal value nums.
	if (k === 0) {
		numMap.forEach((numCount) => {
			// Count one pair if there is more than one same nums.
			// As we need to count unique pairs only.
			if (numCount > 1) {
				kPairs++;
			}
		});

		return kPairs;
	}

	numMap.forEach((_, num) => {
		if (numMap.has(num - k)) {
			kPairs++;
		}
	});

	return kPairs;
};