// https://leetcode.com/problems/find-in-mountain-array/
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
	let length = mountainArr.length();
	let cache = new CachedArray(mountainArr);
	let left = 0;
	let right = length - 1;

	// Find the peak index.
	let peakIndex;
	while (left < right) {
		let mid = left + Math.floor((right - left) / 2);

		if (cache.get(mid) < cache.get(mid + 1)) {
			left = peakIndex = mid + 1;
		} else {
			right = mid;
		}
	}

	// Lookup in left of peak first as we need to return min index.
	left = 0;
	right = peakIndex;

	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (cache.get(mid) < target) {
			left = mid + 1;
		} else if (cache.get(mid) > target) {
			right = mid - 1;
		} else {
			return mid;
		}
	}

	// Not found in left side
	// Lookup in right of peak now.
	left = peakIndex;
	right = length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (cache.get(mid) > target) {
			left = mid + 1;
		} else if (cache.get(mid) < target) {
			right = mid - 1;
		} else {
			return mid;
		}
	}

	return -1;
};


// Use cached array to avoid any extra calls to get function of MountainArr.
var CachedArray = function (arr) {
	this.cache = new Map();
	this.arr = arr;
}

CachedArray.prototype.get = function (index) {
	if (!this.cache.has(index)) {
		this.cache.set(index, this.arr.get(index));
	}

	return this.cache.get(index);
}