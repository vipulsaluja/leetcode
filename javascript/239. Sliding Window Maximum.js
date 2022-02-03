// https://leetcode.com/problems/sliding-window-maximum/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	// Prepare the next greater index array.
	let ng = new Array(nums.length);
	ng[ng.length - 1] = nums.length;
	let st = [nums.length - 1];

	for (let i = nums.length - 2; i >= 0; i--) {
		while (st.length && nums[st[st.length - 1]] < nums[i]) {
			st.pop();
		}

		if (st.length) {
			ng[i] = st[st.length - 1];
		} else {
			ng[i] = nums.length;
		}

		st.push(i);
	}

	let result = [];
	let j = 0;
	for (let i = 0; i <= nums.length - k; i++) {
		// j holds the largest elements index.
		// Next update j when j is out of the window.
		if (j < i) {
			j = i;
		}

		// If the next greater element is within the window, keep hoping
		// futher and further.
		while (ng[j] < i + k) {
			j = ng[j];
		}

		// Finally we have the largest element of the window.
		result.push(nums[j]);
	}

	return result;
}