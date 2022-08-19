// https://leetcode.com/problems/top-k-frequent-words/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordMap = new Map();
    words.forEach((word) => {
        if(!wordMap.has(word)){
            wordMap.set(word, 0);
        }
        
        wordMap.set(word, wordMap.get(word)+1);
    });
    
    let sorted = [...wordMap.keys()].sort((a,b)=>{
        if(wordMap.get(a) === wordMap.get(b)){
            return b > a ? -1 : 1;
        }
        
        return wordMap.get(b) - wordMap.get(a);
    });
    
    return sorted.slice(0, k);
};