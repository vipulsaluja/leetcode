// https://leetcode.com/problems/the-kth-factor-of-n/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
	// Iterate over the 1 to n, and keep the count of factors of n.
	// Start from 1, 0 cannot be a factor.
	// Return the kth factor if reach to k count.

	let divisors = [];
	let sqrtN = Math.floor(Math.sqrt(n));
	for (let i = 1; i <= sqrtN; i++) {
		if (n % i === 0) {
			k--;
			divisors.push(i);
			if (k === 0) {
				return i;
			}
		}
	}
	if (sqrtN * sqrtN === n) {
		k++;
	}

	return (k <= divisors.length) ? n / divisors[divisors.length - k] : -1;
};