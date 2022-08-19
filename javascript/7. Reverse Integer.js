// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 10 && x > -10){
        return x;
    }
    
    let sign = 1;
    if(x<0){
        sign = -1;
        x = x*sign;
    }
    
    let max = Math.pow(2, 31)-1;
    let result = 0;
    while(x > 0){
        let digit = x%10;
        x = Math.floor(x/10);
        
        // Check before modifying as after modification result can be out of bounds
        // And system might crash.
        if(result > (max-digit)/10){
            return 0;
        }
        
        result = (result * 10) + digit;
    }
    
    return result*sign;
};