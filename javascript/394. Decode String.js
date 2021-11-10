// https://leetcode.com/problems/decode-string/submissions/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let countStack = [];
    let stringStack = [];

    let index = 0;
    let res = "";
    while (index < s.length) {
        if (s[index] >= '0' && s[index] <= '9') {
            let count = 0;
            while (s[index] >= '0' && s[index] <= '9') {
                count = 10 * count + parseInt(s[index]);
                index++;
            }

            countStack.push(count);
            continue;
        }

        if (s[index] === "[") {
            stringStack.push(res);
            res = "";
            index++;
            continue;
        }

        if (s[index] === "]") {
            let count = countStack.pop();
            res = stringStack.pop() + res.repeat(count);
            index++;
            continue;
        }

        res += s[index];
        index++;
    }

    return res;
};