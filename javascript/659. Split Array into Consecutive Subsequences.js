// https://leetcode.com/problems/split-array-into-consecutive-subsequences/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let numFrequency = nums.reduce((map, num)=>{
        map.set(num, (map.get(num) || 0)+1);
        
        return map;
    }, new Map());
    
    let subsequences = new Map();
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        // num already part of a sequence.
        if(numFrequency.get(nums[i]) === 0){
            continue;
        }
        
        // a subsequent already present which num can be part of.
        if(subsequences.has(num-1) && subsequences.get(num-1)>0){
            subsequences.set(num-1, subsequences.get(num-1)-1);
            subsequences.set(num, (subsequences.get(num) || 0)+1);
        } else if(
            ((numFrequency.get(num+1) || 0) > 0) &&
            ((numFrequency.get(num+2) || 0) > 0)){
            subsequences.set(num+2, (subsequences.get(num+2)||0)+1);
            
            
            numFrequency.set(num+1, numFrequency.get(num+1)-1);
            numFrequency.set(num+2, numFrequency.get(num+2)-1);
        } else {
            return false;
        }
        
        numFrequency.set(num, numFrequency.get(num)-1);
    }
    
    return true;
};