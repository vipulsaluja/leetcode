// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length < 2) {
        return 0;
    }
    
    let [left, right] = [0, height.length-1];
    let maxArea = 0;
    while(left < right) {
        maxArea = Math.max(maxArea, (right-left)*Math.min(height[left], height[right]));
        
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};