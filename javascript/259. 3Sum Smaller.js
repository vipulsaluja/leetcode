// https://leetcode.com/problems/3sum-smaller/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
    nums.sort((a, b) => a - b);



    return smallerSum(3, nums, 0, target);
};

var smallerSum = function (digits, nums, index, target) {
    if (digits === 2) {
        return twoSumSmaller(nums, index, target);
    }

    let smallerSumCount = 0;
    for (let i = 0; i <= nums.length - digits; i++) {
        smallerSumCount += smallerSum(digits - 1, nums, i + 1, target - nums[i]);
    }

    return smallerSumCount;
}

var twoSumSmaller = function (nums, index, target) {
    let left = index;
    let right = nums.length - 1;

    let sumCount = 0;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            sumCount += right - left;
            left++;
        } else {
            right--;
        }
    }

    return sumCount;
}