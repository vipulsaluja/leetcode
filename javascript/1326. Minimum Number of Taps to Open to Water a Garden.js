// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
	if (!ranges || !ranges.length) {
		return -1;
	}

	let intervals = [];
	ranges.forEach((range, i) => {
		intervals.push([Math.max((i - range), 0), i + range]);
	});

	intervals.sort((a, b) => a[0] - b[0]);

	let minimumNumberOfTaps = 0;

	// Start from left most index, i.e. 0.
	// And cover the garden and move right.
	let left = 0;

	while (left < n) {
		let maxIndex = 0;
		let maxSoFar = 0;

		intervals.forEach(([min, max]) => {
			// The range must cover the left.
			// Find out the range which covers most area including left.
			if (min <= left && max > left) {
				// Update when a new max is found.
				if (maxIndex < max) {
					maxIndex = max;

					// This is used to know if there is no progress
					// in any iteration.
					// In that situation, garden cannot be watered.
					maxSoFar = max - min;
				}
			}
		});

		// Update the left index after the iteration.
		if (maxSoFar > 0) {
			left = maxIndex;

			// Increment the counter after each successful iteration.
			minimumNumberOfTaps++;
		} else {
			// Garden cannot be watered as a gap is found.
			return -1;
		}
	}

	return minimumNumberOfTaps;
};