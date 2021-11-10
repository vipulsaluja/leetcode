// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	let numDecodingsAtIndex = Array(s.length + 1).fill(0);

	numDecodingsAtIndex[0] = 1;
	numDecodingsAtIndex[1] = s.charAt(0) === '0' ? 0 : 1;

	for (let i = 2; i <= s.length; i++) {
		let oneDigit = parseInt(s.charAt(i - 1), 10);
		let twoDigits = parseInt(s.substring(i - 2, i), 10);

		if (oneDigit > 0) {
			numDecodingsAtIndex[i] += numDecodingsAtIndex[i - 1];
		}

		if (twoDigits >= 10 && twoDigits <= 26) {
			numDecodingsAtIndex[i] += numDecodingsAtIndex[i - 2];
		}

	}

	return numDecodingsAtIndex[s.length];
};