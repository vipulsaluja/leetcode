// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/
/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
	// Need a sliding window of size 1s count.
	// The number of min swaps will be total ones minus max ones found 
	// in sliding window.
	let ones = data.reduce((total, num) => { return total + num; }, 0);
	let left = 0;
	let right = 0;

	let maxOnesCount = 0;
	let onesCount = 0;
	while (right < data.length) {
		if (right - left + 1 > ones) {
			// Since moving the end of sliding window
			// if there was a one at the end, reduce ones count.
			if (data[left]) {
				onesCount--;
			}
			left++;
		}

		// If front of the window encountered a one, increment.
		if (data[right]) {
			onesCount++;

			// Hold the max count of ones.
			maxOnesCount = Math.max(maxOnesCount, onesCount);
		}

		// Move window.
		right++;
	}

	// Number of min swaps would be number of ones minus maximum ones found in window.
	return ones - maxOnesCount;
};