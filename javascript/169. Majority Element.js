// https://leetcode.com/problems/majority-element/solution/
// Boyer-Moore Voting Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majority;
    let majorityCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (majorityCount === 0) {
            majority = nums[i];
        }

        if (nums[i] === majority) {
            majorityCount++;
        } else {
            majorityCount--;
        }
    }

    return majority;
};