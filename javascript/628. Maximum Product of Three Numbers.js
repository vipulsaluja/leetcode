// https://leetcode.com/problems/maximum-product-of-three-numbers/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    if (nums.length < 3) {
        return -1;
    }

    if (nums === 3) {
        return nums[0] * nums[1] * nums[2];
    }

    let min1 = min2 = Infinity,
        max1 = max2 = max3 = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] < min2) {
            min2 = nums[i];
        }

        if (nums[i] >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] >= max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] > max3) {
            max3 = nums[i];
        }
    }

    return Math.max(max1 * min1 * min2, max1 * max2 * max3);
};