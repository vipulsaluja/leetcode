// https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let oneCount = 0;

    while (n) {
        oneCount++;

        n &= (n - 1);
    }

    return oneCount;
};