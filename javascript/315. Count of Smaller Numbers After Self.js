// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    let numsIndex = nums.map((num, index) => { return { val: num, index: index } });
    let result = new Array(nums.length).fill(0);
    mergeSort(numsIndex, 0, nums.length - 1, result);


    return result;
};

var mergeSort = function (nums, start, end, result) {
    if (start >= end) return;

    let mid = Math.floor(start + (end - start) / 2);
    mergeSort(nums, start, mid, result);
    mergeSort(nums, mid + 1, end, result);
    merge(nums, start, mid, end, result);
}

var merge = function (nums, start, mid, end, result) {
    let merged = new Array(end - start);
    let mergedIndex = 0;
    let left = start;
    let right = mid + 1;
    let inversionCount = 0;
    while (left <= mid && right <= end) {
        if (nums[left].val <= nums[right].val) {
            result[nums[left].index] += inversionCount;
            merged[mergedIndex] = nums[left];
            mergedIndex++;
            left++;
        } else {
            inversionCount++;
            merged[mergedIndex] = nums[right];
            mergedIndex++;
            right++;
        }
    }

    while (left <= mid) {
        result[nums[left].index] += inversionCount;
        merged[mergedIndex] = nums[left];
        mergedIndex++;
        left++;
    }

    while (right <= end) {
        merged[mergedIndex] = nums[right];
        mergedIndex++;
        right++;
    }

    for (let i = start; i <= end; i++) {
        nums[i] = merged[i - start];
    }
}