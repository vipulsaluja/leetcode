// https://leetcode.com/problems/two-sum-less-than-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0,
        right = nums.length - 1;

    let maxSum = -1;
    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum >= k) {
            right--;
        } else {
            maxSum = Math.max(maxSum, sum);
            left++;
        }
    }

    return maxSum;
};