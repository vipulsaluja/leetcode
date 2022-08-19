// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = 0;
    let max = Math.pow(2, 31)-1;
    let min = -Math.pow(2, 31);
    let spaceTrimmed = false;
    let sign = 1;
    let signCaptured = false;
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            if(!spaceTrimmed){
                continue;
            }

            return result*sign;
        }
        
        spaceTrimmed = true;
        
        if(s[i] === "-" || s[i] === "+"){
            if(!signCaptured) {
                sign = s[i] === "-" ? -1 : 1;
                signCaptured = true;
                continue;
            }
            
            return result*sign;
        }
        
        signCaptured = true;
        
        if(s[i].match(/[0-9]/)){
            let digit = parseInt(s[i], 10);
            if((result > (max-digit)/10) || (result < (min-digit)/10)){
                return sign < 0 ? min : max;
            }
            
            result = result*10+digit;
            continue;
        }
        
        return result*sign;
    }
    
    return result*sign;
};