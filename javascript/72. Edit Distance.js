// https://leetcode.com/problems/edit-distance/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let [length1, length2] = [word1.length, word2.length];
    
    let dp = Array.apply(null, {length:length1+1}).map(()=>new Array(length2+1).fill(0));
    
    for(let row=0; row<=length1; row++){
        for(let col=0; col<=length2; col++){
            if(row===0){
                dp[row][col] = col;
                continue;
            }
            
            if(col===0){
                dp[row][col] = row;
                continue;
            }
            
            let left = dp[row][col-1]+1;
            let up = dp[row-1][col]+1;
            let diagonal = dp[row-1][col-1] + (word1[row-1] !== word2[col-1] ? 1 : 0);
            
            dp[row][col] = Math.min(left, up, diagonal);
        }
    }
    
    return dp[length1][length2];
};