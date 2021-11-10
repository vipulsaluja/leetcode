// https://leetcode.com/problems/word-break-ii/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
	return wordBreakHelper(s, wordDict, new Map());
};


var wordBreakHelper = function (s, wordDict, dp) {
	if (dp.has(s)) return dp.get(s);
	if (s === "") {
		return [""];
	}

	let results = [];

	for (let i = 0; i < wordDict.length; i++) {
		if (s.startsWith(wordDict[i])) {
			let subResults = wordBreakHelper(s.substring(wordDict[i].length, s.length), wordDict, dp);

			subResults.forEach((subResult) => {
				let optionalSpace = subResult ? " " : "";
				results.push(wordDict[i] + optionalSpace + subResult);
			});
		}
	}
	dp.set(s, results);
	return results;
}