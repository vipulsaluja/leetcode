// https://leetcode.com/problems/word-ladder/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    
    if(!wordSet.has(endWord)){
        return 0;
    }
    
    let queue = [beginWord];
    wordSet.delete(beginWord);
    
    let level = 0;
    while(queue.length) {
        let length = queue.length;
        level++;
        while(length--){
            let curr = queue.shift();
            if(curr === endWord) {
                return level;
            }
            
            let neighbors = getNeighbors(curr);
            neighbors.forEach(neighbor => {
                if(wordSet.has(neighbor)){
                    queue.push(neighbor);
                    wordSet.delete(neighbor);
                }
            });
        }
    }
    
    return 0;
};

const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

var getNeighbors = function(word) {
    let neighbors = [];
    let wordArr = word.split("");
    for(let i=0; i<word.length; i++){
        let temp = wordArr[i];
        alphabets.forEach(alphabet => {
            wordArr[i] = alphabet;
            neighbors.push(wordArr.join(""));
        });
        
        wordArr[i] = temp;
    }
    
    return neighbors;
}