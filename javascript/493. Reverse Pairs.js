// https://leetcode.com/problems/reverse-pairs/
/**
 * @param {number[]} nums
 * @return {number}
 */
let pairsCount;
var reversePairs = function (nums) {
    if (nums.length < 2) {
        return 0;
    }

    pairsCount = 0;
    mergeSort(nums, 0, nums.length - 1);

    return pairsCount;
};

var mergeSort = function (nums, start, end) {
    if (start >= end) {
        return;
    }

    let mid = start + Math.floor((end - start) / 2);

    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);
    merge(nums, start, mid, end);
}

var merge = function (nums, start, mid, end) {
    let left = start;
    let right = mid + 1;

    while (left <= mid && right <= end) {
        if (nums[left] > 2 * nums[right]) {
            // Starting from current left, till mid all will satisfy the > 2 * condition.
            pairsCount += (mid + 1 - left);

            right++;
        } else {
            left++;
        }
    }

    let merged = new Array(end - start);
    let mergedIndex = 0;
    left = start;
    right = mid + 1;

    while (left <= mid && right <= end) {
        if (nums[left] <= nums[right]) {
            merged[mergedIndex++] = nums[left++];
        } else if (nums[left] > nums[right]) {
            merged[mergedIndex++] = nums[right++];
        }
    }

    while (left <= mid) {
        merged[mergedIndex++] = nums[left++];
    }

    while (right <= end) {
        merged[mergedIndex++] = nums[right++];
    }

    for (let i = start; i <= end; i++) {
        nums[i] = merged[i - start];
    }
}
