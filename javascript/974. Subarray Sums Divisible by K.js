// https://leetcode.com/problems/subarray-sums-divisible-by-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let remainderMap = new Map();
    remainderMap.set(0, 1);
    let subArrCount = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remainder = sum % k;

        if (remainder < 0) remainder += k;

        if (remainderMap.has(remainder)) {
            subArrCount += remainderMap.get(remainder);
            remainderMap.set(remainder, remainderMap.get(remainder) + 1);
        } else {
            remainderMap.set(remainder, 1);
        }
    }

    return subArrCount;
};