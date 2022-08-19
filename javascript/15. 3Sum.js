// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b)=>a-b);
    
    let results = [];
    // If first value is not less than zero then there is no way
    // remaning values can sum to zero as the array is sorted.
    for(let i=0; i<nums.length && nums[i] <= 0; i++) {
        
        // Skip duplicate values.
        if(i === 0 || nums[i-1] != nums[i]) {
            twoSum(nums, i, results);
        }
    }
    
    return results;
};

var twoSum = function(nums, i, results){
    let [left, right] = [i+1, nums.length-1];
    while(left < right) {
        let sum = nums[i]+nums[left]+nums[right];
        if(sum === 0){
            results.push([nums[i], nums[left++], nums[right--]]);

            // Skip same values.
            while(left<right && nums[left] === nums[left-1]){
                left++;
            }
            continue;
        }
        
        if(sum < 0){
            left++;
            continue;
        }
        
        right--;
    }
    
}