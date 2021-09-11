// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let charSt = [];

    for (let i = 0; i < s.length; i++) {
        if (charSt.length) {
            if (charSt[charSt.length - 1] === s[i]) {
                charSt.pop();
                continue;
            }
        }

        charSt.push(s[i]);
    }

    return charSt.join("");
};