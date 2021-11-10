// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	if (strs.length === 1) {
		return [strs];
	}
	let anagramsMap = new Map();

	for (let strIndex = 0; strIndex < strs.length; strIndex++) {
		let strHashKey = getStrHashKey(strs[strIndex]);
		if (anagramsMap.has(strHashKey)) {
			anagramsMap.get(strHashKey).push(strs[strIndex]);
		} else {
			anagramsMap.set(strHashKey, [strs[strIndex]]);
		}
	}
	return Array.from(anagramsMap.values());
};

var getStrHashKey = function (str) {
	let aCode = "a".charCodeAt(0);
	let hash = Array(26).fill(0);
	for (let i = 0; i < str.length; i++) {
		hash[str.charCodeAt(i) - aCode] += 1;
	}
	return hash.join(".");
}