// https://leetcode.com/problems/find-peak-element/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let direction = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        let newDirection = 0;
        if (nums[i] <= nums[i + 1]) {
            newDirection = 1;
        }

        if (nums[i] > nums[i + 1]) {
            newDirection = -1
        }

        if (newDirection != direction) {
            if (direction > 0 && newDirection < 0) {
                return i;
            }
        }

        direction = newDirection;
    }

    return direction < 0 ? 0 : nums.length - 1;
};