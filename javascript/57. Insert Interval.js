// https://leetcode.com/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if (intervals.length < 1) {
		return [newInterval];
	}

	let resultIntervals = [];

	let i = 0;
	while (i < intervals.length) {
		if (intervals[i][0] < newInterval[0]) {
			resultIntervals.push(intervals[i]);
			i++;
		} else {
			break;
		}
	}

	// Push the new interval if no existing interval has starting point less than the new interval
	// as it means new interval can be in the start.
	// Or If the last inserted interval ends before the new interval starts.
	if (resultIntervals.length === 0 || resultIntervals[resultIntervals.length - 1][1] < newInterval[0]) {
		resultIntervals.push(newInterval);
	} else {
		resultIntervals[resultIntervals.length - 1][1] = Math.max(resultIntervals[resultIntervals.length - 1][1], newInterval[1]);
	}

	// Complete the pending intervals if any.
	while (i < intervals.length) {
		// If last item's end point is before next intervals endpoint then see if need to update the end point otherwise simply increment the counter.
		if (resultIntervals[resultIntervals.length - 1][1] >= intervals[i][0]) {
			resultIntervals[resultIntervals.length - 1][1] = Math.max(resultIntervals[resultIntervals.length - 1][1], intervals[i][1]);
		} else {
			resultIntervals.push(intervals[i]);
		}
		i++;
	}

	return resultIntervals;
};



