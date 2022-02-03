// https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
	if (!input) return 0;

	let max = 0;
	let levelDepth = [];
	let rows = input.split("\n");
	for (let i = 0; i < rows.length; i++) {
		let currTabsCount = (rows[i].match(/\t/g) || []).length;
		levelDepth[currTabsCount] = rows[i].length - (rows[i].lastIndexOf("\t") + 1) + (levelDepth[currTabsCount - 1] || 0);

		// Update max if current row is a file path.
		if (rows[i].indexOf(".") > -1) {
			max = Math.max(max, levelDepth[currTabsCount] + currTabsCount);
		}
	}

	return max;
};