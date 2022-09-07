// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
let cache;
var numDecodings = function(s) {
    cache = new Map();
    
    return findDecodings(0, s);
};

var findDecodings = function(currIndex, s){
    if(cache.has(currIndex)){
        return cache.get(currIndex);
    }
    
    if(currIndex === s.length){
        return 1;
    }
    
    if(s[currIndex] === "0"){
        return 0;
    }
    
    if(currIndex === s.length-1){
        return 1;
    }
    
    let count = findDecodings(currIndex+1, s);
    let twoDigits = parseInt(s.substring(currIndex, currIndex+2));
    if(twoDigits >=10 && twoDigits <= 26){
        count += findDecodings(currIndex+2, s);
    }
    
    cache.set(currIndex, count);
    
    return count;
}