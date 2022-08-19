// https://leetcode.com/problems/alien-dictionary/
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (!words.length) {
        return "";
    }
    
    let adjList = new Map();
    let indegreeMap = new Map();
    
    // Create entry of each character in adjList and indegreeMap.
    words.forEach(word => {
        for(let i=0; i<word.length; i++){
            let c = word[i];
            if(!adjList.has(c)){
                adjList.set(c, []);
                indegreeMap.set(c, 0);
            }
        }
    });
    
    // Compare all pair of adjacent words.
    for(let i=0; i<words.length-1; i++){
        let word1 = words[i];
        let word2 = words[i+1];
        
        // A prefix word is not allowed to before the word.
        if(word1.length > word2.length && word1.startsWith(word2)){
            return "";
        }
        
        let compareLength = Math.min(word1.length, word2.length);
        
        for(let j=0; j<compareLength; j++){
            if(word1[j] !== word2[j]){
                adjList.get(word1[j]).push(word2[j]);
                indegreeMap.set(word2[j], indegreeMap.get(word2[j])+1);
                
                // No point in comparing the char after first mismatch.
                break;
            }
        }
    }
    
    // Start the queue with characters which have no dependency (indegree 0).
    let queue = [];
    indegreeMap.forEach((indegree, char) => {
        if(!indegree) {
            queue.push(char);
        }
    });
    
    
    let result = "";
    while(queue.length){
        let curr = queue.shift();
        result += curr;
        
        adjList.get(curr).forEach((char) => {
            indegreeMap.set(char, indegreeMap.get(char)-1);
            if(indegreeMap.get(char) === 0){
                queue.push(char);
            }
        });
    }
    
    if(result.length != indegreeMap.size){
        return "";
    }
    
    return result;
};