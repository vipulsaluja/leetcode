// https://leetcode.com/problems/break-a-palindrome/
/**
 * @param {string} palindrome
 * @return {string}
 */

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) return ""

    let isOdd = palindrome.length % 2 === 1;

    let stopAt = Math.floor(palindrome.length / 2);
    let i = 0;

    while (i < palindrome.length) {
        if (((isOdd && i !== stopAt) || !isOdd) && palindrome[i] !== "a") {
            return palindrome.replaceAt(i, "a");
        }
        i++;
    }

    return palindrome.replaceAt(i - 1, "b");
};

