// https://leetcode.com/problems/get-the-maximum-score/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function (nums1, nums2) {
    let oneIndex = 0, twoIndex = 0;

    let oneSum = 0, twoSum = 0;
    let maxSum = 0;
    while (oneIndex < nums1.length && twoIndex < nums2.length) {
        if (nums1[oneIndex] > nums2[twoIndex]) {
            twoSum += nums2[twoIndex];
            twoIndex++;
        } else if (nums1[oneIndex] < nums2[twoIndex]) {
            oneSum += nums1[oneIndex];
            oneIndex++;
        } else {
            maxSum += Math.max(oneSum, twoSum) + nums1[oneIndex];
            oneIndex++;
            twoIndex++;

            oneSum = 0;
            twoSum = 0;
        }
    }

    while (oneIndex < nums1.length) {
        oneSum += nums1[oneIndex];
        oneIndex++;
    }

    while (twoIndex < nums2.length) {
        twoSum += nums2[twoIndex];
        twoIndex++;
    }

    return (maxSum + Math.max(oneSum, twoSum)) % (Math.pow(10, 9) + 7);
};