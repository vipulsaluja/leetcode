// https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
class Trie {
    constructor(){
        this.children = new Map();
    }
}
var countDistinct = function(s) {
    if(!s) {
        return 0;
    }
    
    let count=0;
    let root = new Trie();
    for(let i=0; i<s.length; i++){
        let node = root;
        for(let j=i; j<s.length; j++){
            if(!node.children.has(s[j])){
                node.children.set(s[j], new Trie());
                count++;
            }
            
            node = node.children.get(s[j]);
        }
    }
    
    return count;
};