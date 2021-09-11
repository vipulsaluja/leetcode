/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

let result;
var fourSum = function (nums, target) {
    result = [];
    nums.sort((a, b) => { return a - b; });
    kSum(nums, target, [], 4);

    return result;
};

var kSum = function (nums, target, res, k) {
    if (k === 2) {
        twoSum(nums, target, res);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i - 1]) i++;
        kSum(nums.slice(i + 1), target - nums[i], [...res, nums[i]], k - 1);
    }
}

var twoSum = function (nums, target, res) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum < target) {
            left++;
            continue;
        }

        if (sum > target) {
            right--;
            continue;
        }

        result.push([...res, nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
    }
}