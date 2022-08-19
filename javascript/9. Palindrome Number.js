// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x === 0){
        return true;
    }
    
    // Negative numbers cannot be pallindrome.
    // Numbers ending in zero cannot be pallindrome.
    if(x < 0 || x % 10 === 0){
        return false;
    }
    
    let reverse = 0;
    while(x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x/10);
    }
    
    return x === reverse || x === Math.floor(reverse/10);
};