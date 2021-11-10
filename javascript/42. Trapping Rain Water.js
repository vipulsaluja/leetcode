// https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	if (!height.length) {
		return 0;
	}

	let leftIndex = 0;
	let rightIndex = height.length - 1;

	let leftMax = height[leftIndex];
	let rightMax = height[rightIndex];
	let trappedWater = 0;
	while (leftIndex < rightIndex) {
		if (height[leftIndex] < height[rightIndex]) {
			leftMax = Math.max(height[leftIndex], leftMax);
			trappedWater += (leftMax - height[leftIndex]);
			leftIndex++;
		} else {
			rightMax = Math.max(height[rightIndex], rightMax);
			trappedWater += (rightMax - height[rightIndex]);
			rightIndex--;
		}
	}

	return trappedWater;
};