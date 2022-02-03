// https://leetcode.com/problems/binary-gap/
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
	let gap = 0;
	let last = -1;

	for (let i = 0; i < 32; i++) {
		if (((n >> i) & 1) > 0) {
			if (last >= 0) {
				gap = Math.max(gap, i - last);
			}
			last = i;
		}
	}

	return gap;
};