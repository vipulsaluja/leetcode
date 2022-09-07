// https://leetcode.com/problems/minimum-increment-to-make-array-unique/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a,b)=>a-b);
    
    let moves = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i-1] >= nums[i]){
            let increment = nums[i-1]-nums[i]+1;
            nums[i] += increment;
            moves += increment;
        }
    }
    
    return moves;
};