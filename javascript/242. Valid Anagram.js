// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    if (s === "") {
        return true;
    }

    let charMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!charMap.has(s[i])) {
            charMap.set(s[i], 0);
        }

        charMap.set(s[i], charMap.get(s[i]) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!charMap.has(t[i])) {
            return false;
        }

        charMap.set(t[i], charMap.get(t[i]) - 1);

        if (charMap.get(t[i]) === 0) {
            charMap.delete(t[i]);
        }
    }

    return charMap.size === 0;
};