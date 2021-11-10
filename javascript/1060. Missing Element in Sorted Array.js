// https://leetcode.com/problems/missing-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    let index = 1;
    let prev = nums[0];
    while (k && index < nums.length) {
        let missingNumbers = nums[index] - prev - 1;
        if ((k - missingNumbers) <= 0) {
            return prev + k;
        }

        k -= missingNumbers;
        prev = nums[index];

        index++;
    }

    return prev + k;
};