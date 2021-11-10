// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
	let start = 0;
	let end = 0;
	let uniqueCharsMap = new Map();
	let substringsMap = new Map();

	let captureSubstring = function (start, end) {
		if ((end - start + 1) >= minSize && (end - start + 1) <= maxSize && uniqueCharsMap.size <= maxLetters) {
			let subStr = s.substring(start, end + 1);

			if (substringsMap.has(subStr)) {
				substringsMap.set(subStr, substringsMap.get(subStr) + 1);
			} else {
				substringsMap.set(subStr, 1);
			}
		}
	}

	let incrementStart = function () {
		let startCharCount = uniqueCharsMap.get(s.charAt(start));
		if (startCharCount === 1) {
			uniqueCharsMap.delete(s.charAt(start));
		} else {
			uniqueCharsMap.set(s.charAt(start), startCharCount - 1);
		}

		start++;
	}

	while (start < s.length - minSize) {
		while (uniqueCharsMap.size > maxLetters || (end - start + 1) > maxSize || end - start + 1 > minSize) {
			incrementStart();
		}

		if (end <= s.length - 1) {
			if (uniqueCharsMap.has(s.charAt(end))) {
				uniqueCharsMap.set(s.charAt(end), uniqueCharsMap.get(s.charAt(end)) + 1);
			} else {
				uniqueCharsMap.set(s.charAt(end), 1);
			}
		}

		captureSubstring(start, end);

		if (end < s.length - 1) {
			end++;
		}
	}

	return substringsMap.size ? Math.max(...substringsMap.values()) : 0;
};