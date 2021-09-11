// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    nums.sort((a, b) => a - b);

    let left = 0,
        right = nums.length - 4;// to exclude 3 right most elements.

    let min = Infinity;
    while (right < nums.length) {
        min = Math.min(min, nums[right] - nums[left]);
        left++;
        right++;
    }

    return min < Infinity ? min : 0;
};