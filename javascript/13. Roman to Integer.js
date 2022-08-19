// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
};
var romanToInt = function(s) {
    if(!s) {
        return 0;
    }
    
    let lastVal = romanMap[s[s.length-1]];
    let result = lastVal;

    for(let i=s.length-2; i>=0; i--){
        let currVal = romanMap[s[i]];
        if(currVal < lastVal) {
            result -= currVal;
        } else {
            result += currVal;
        }
        
        lastVal = currVal;
    }
    
    return result;
};