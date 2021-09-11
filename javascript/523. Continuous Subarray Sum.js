// https://leetcode.com/problems/continuous-subarray-sum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let runningSum = 0;
    let remainderMap = new Map();
    remainderMap.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        let remainder = runningSum % k;
        if (remainderMap.has(remainder)) {
            if ((i - remainderMap.get(remainder)) > 1) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};