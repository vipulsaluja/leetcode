// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let cache = new Map();
    
    return findWord(wordDict, s, cache);
};

var findWord = function(words, s, cache) {
    // Reached end of string.
    if(s.length === 0){
        return true;
    }

    if(cache.has(s)) {
        if(cache.get(s) === "1") {
            return true;
        }
        
        return false;
    }
    
    for(let i=0; i<words.length; i++){
        let length = words[i].length;
        if(s.length>=length &&
            words[i] === s.substring(0, length) && 
             findWord(words, s.substring(length,s.length), cache)) {
            
            cache.set(s, "1");
            return true;
        }
    }
    
    cache.set(s, "0");
    
    return false;
}