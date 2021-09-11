// https://leetcode.com/problems/gray-code/
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let result = [];

    generateGrayCode(result, n);

    return result;
};

var generateGrayCode = function (result, n) {
    if (n === 0) {
        result.push(0);
        return;
    }

    generateGrayCode(result, n - 1);

    let currLength = result.length;

    let mask = 1 << (n - 1);

    for (let i = currLength - 1; i >= 0; i--) {
        result.push(result[i] | mask);
    }
}