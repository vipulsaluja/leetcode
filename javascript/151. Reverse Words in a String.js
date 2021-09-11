// https://leetcode.com/problems/reverse-words-in-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let reverseString = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            let word = "";
            while (s[i] !== " " && i >= 0) {
                word = s[i] + word;
                i--;
            }
            reverseString += word + " ";
        }
    }

    return reverseString.trim();
};