// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(numbers.length < 2){
        return [];
    }
    
    let [left, right] = [0, numbers.length-1];
    while(left<right){
        let currSum = numbers[left]+numbers[right]; 
        if(currSum === target) {
            return [left+1, right+1];
        }
        
        if(currSum < target) {
            left++;
            continue;
        }
        
        right--;
    }
    
    return [];
};