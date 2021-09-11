// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    if (!s || s === "") {
        return 0;
    }

    let charArr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let charIndex = s.charCodeAt(i) - 97;
        charArr[charIndex]++;
    }

    let usedFrequency = new Set();
    let minDeletionCount = 0;
    for (let i = 0; i < 26; i++) {
        if (charArr[i] > 0) {
            while (charArr[i] !== 0 && usedFrequency.has(charArr[i])) {
                charArr[i]--;
                minDeletionCount++;
            }

            usedFrequency.add(charArr[i]);
        }
    }

    return minDeletionCount;
};