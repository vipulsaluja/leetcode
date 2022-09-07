// https://leetcode.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let [index1, index2] = [num1.length-1, num2.length-1];
    
    let carry = 0;
    let total = "";
    while(index1 >= 0 || index2 >= 0 || carry){
        let sum = (num1[index1] !== undefined ? parseInt(num1[index1], 10) : 0) +
            (num2[index2] !== undefined ? parseInt(num2[index2], 10) : 0) +
            carry;
        
        total = (sum % 10) + total;
        carry = Math.floor(sum / 10);
        
        index1--;
        index2--;
    }
    
    return total;
};