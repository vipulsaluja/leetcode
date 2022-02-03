// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
let max = 0;
let start = 0;
var longestPalindrome = function (s) {
	if (s.length < 2) {
		return s;
	}

	max = 0;
	start = 0;

	for (let i = 0; i < s.length - 1; i++) {
		expandPalindrome(s, i, i);
		expandPalindrome(s, i, i + 1);
	}

	return s.substring(start, start + max);
};

var expandPalindrome = function (s, left, right) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}

	if (max < right - left - 1) {
		max = right - left - 1;
		start = left + 1;
	}
}