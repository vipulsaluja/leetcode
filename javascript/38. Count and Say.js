// https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }

    return say(countAndSay(n - 1));
};

var say = function (str) {
    let currChar = str[0];
    let currCharCount = 1;
    let result = "";
    for (let i = 1; i < str.length; i++) {
        if (currChar != str[i]) {
            result += currCharCount + currChar;
            currCharCount = 1;
            currChar = str[i];

            continue;
        }

        currCharCount++;
    }

    result += currCharCount + currChar;

    return result;
}