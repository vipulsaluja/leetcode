// https://leetcode.com/problems/peak-index-in-a-mountain-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	return binarySearch(0, arr.length - 1, arr);
};

var binarySearch = function (left, right, arr) {
	while (left < right) {
		let mid = left + Math.floor((right - left) / 2);

		// Since we are looking for maximum in the mountain array.
		if (arr[mid] < arr[mid + 1]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return left;
}