// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0;
    let curr = 0;
    let right = nums.length - 1;

    while (curr <= right) {
        if (nums[curr] === 0) {
            [nums[left], nums[curr]] = [nums[curr], nums[left]];
            left++;
            curr++;
        } else if (nums[curr] === 2) {
            [nums[right], nums[curr]] = [nums[curr], nums[right]];
            right--;
        } else {
            curr++;
        }
    }
};