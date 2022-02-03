// https://leetcode.com/problems/degree-of-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
	if (nums.length === 1) {
		return 1;
	}

	let countMap = new Map();
	countMap.set(nums[0], { count: 1, startIndex: 0, endIndex: 0 })
	let resultNode = { count: 1, startIndex: 0, endIndex: 0 };
	for (let i = 1; i < nums.length; i++) {
		if (!countMap.has(nums[i])) {
			countMap.set(nums[i], { count: 1, startIndex: i, endIndex: i });
		} else {
			let numStat = countMap.get(nums[i]);
			numStat.count += 1;
			numStat.endIndex = i;
		}

		// Update result node
		// result node is the one with max count and min length.
		if (countMap.get(nums[i]).count > resultNode.count) {
			resultNode = countMap.get(nums[i]);
		} else if (countMap.get(nums[i]).count === resultNode.count &&
			(countMap.get(nums[i]).endIndex - countMap.get(nums[i]).startIndex < resultNode.endIndex - resultNode.startIndex)) {
			resultNode = countMap.get(nums[i]);
		}
	}

	return resultNode.endIndex - resultNode.startIndex + 1;
};