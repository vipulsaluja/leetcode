// https://leetcode.com/problems/meeting-rooms-ii/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
	let start = new Array(intervals.length);
	let end = new Array(intervals.length);

	intervals.forEach((interval, index) => {
		[start[index], end[index]] = interval;
	});

	start.sort((a, b) => a - b);
	end.sort((a, b) => a - b);

	let startIndex = 0;
	let endIndex = 0;
	let usedRooms = 0;
	while (startIndex < intervals.length) {
		if (start[startIndex] >= end[endIndex]) {
			usedRooms--;
			endIndex++;
		}

		usedRooms++;
		startIndex++;
	}

	return usedRooms;
};