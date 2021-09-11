// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let combinations;
var subsets = function (nums) {
    combinations = [[]];

    for (let i = 1; i <= nums.length; i++) {
        backtrack(nums, 0, i, []);
    }

    return combinations;
};

var backtrack = function (nums, startIndex, combinationSize, combination) {
    if (combination.length === combinationSize) {
        combinations.push([...combination]);
        return;
    }

    for (let i = startIndex; i < nums.length; i++) {
        combination.push(nums[i]);
        backtrack(nums, i + 1, combinationSize, combination);
        combination.pop();
    }
}