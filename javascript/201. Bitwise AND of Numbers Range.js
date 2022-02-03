// https://leetcode.com/problems/bitwise-and-of-numbers-range/
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// The AND of any numbers is the most common left bit.
// Right shift the min and max of range untill min is not less than max.
var rangeBitwiseAnd = function (left, right) {
	let shifts = 0;

	while (left < right) {
		left >>= 1;
		right >>= 1;

		shifts++;
	}

	return left << shifts;
};