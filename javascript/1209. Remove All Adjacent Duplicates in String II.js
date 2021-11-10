// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (sArr, k) {
	let resultArr = [];

	for (let i = 0; i < sArr.length; i++) {
		if (resultArr.length) {
			if (resultArr[resultArr.length - 1].char === sArr[i]) {
				if (resultArr[resultArr.length - 1].count === k - 1) {
					resultArr.pop();
				} else {
					resultArr[resultArr.length - 1].count++;
				}
			} else {
				resultArr.push({ char: sArr[i], count: 1 });
			}
		} else {
			resultArr.push({ char: sArr[i], count: 1 });
		}
	}

	return resultArr.map((item) => { return item.char.repeat(item.count); }).join("");
};