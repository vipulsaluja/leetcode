// https://leetcode.com/problems/3sum-closest/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let diff = Number.MAX_VALUE;
    
    nums.sort((a,b)=>a-b);
    let length = nums.length;
    
    for(let i=0; i<length && diff !== 0; i++){
        let left = i+1;
        let right = length-1;
        
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(Math.abs(target-sum) < Math.abs(diff)){
                diff = target-sum;
            }
            
            if(sum < target){
                left++;
            } else {
                right--;
            }
        }
    }
    
    return target-diff;
};