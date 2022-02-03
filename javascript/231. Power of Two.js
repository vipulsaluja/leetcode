// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */

/*
n = 5
In binary
n = 		1	0	1
n-1 = 		1	0	0
n & (n-1) =	1	0	0 !== 0

n = 4
In binary
n = 		1	0	0
n-1 = 		0	1	1
n * (n-1) =	0	0	0 === 0
*/
var isPowerOfTwo = function (n) {
	if (!n || n < 0) return false;

	// AND of n and n-1 for non-negative numbers MUST be zero for n to be power of two.
	// (n-1) makes the leftmost 1 bit to 0 and AND with n should result in zero
	// if n is power of 2.
	return (n & (n - 1)) === 0;
};