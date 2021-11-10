// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let mergedIntervals = [];
	intervals = intervals.sort((a, b) => {
		if (a[0] < b[0]) {
			return -1;
		} else if (a[0] > b[0]) {
			return 1;
		} else {
			if (a[1] < b[1]) {
				return -1;
			} else {
				return 0;
			}
		}
	});

	// Initialize to avoid extra check in for loop.
	mergedIntervals.push(intervals[0]);

	for (i = 1; i < intervals.length; i++) {
		if (mergedIntervals[mergedIntervals.length - 1][1] >= intervals[i][0]) {
			if (mergedIntervals[mergedIntervals.length - 1][1] < intervals[i][1]) {
				mergedIntervals[mergedIntervals.length - 1][1] = intervals[i][1];
			}
		} else {
			mergedIntervals.push(intervals[i]);
		}
	}

	return mergedIntervals;
};