// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid.length || !grid[0].length){
        return 0;
    }
    
    let dp = Array.apply(null, {length: grid.length}).map(()=> new Array(grid[0].length).fill(0));
    
    for(let row=grid.length-1; row>=0; row--){
        for(let col=grid[0].length-1; col>=0; col--){
            if(row===grid.length-1 && col===grid[0].length-1){
                dp[row][col] = grid[row][col];
                continue;
            }
            
            if(row===grid.length-1){
                dp[row][col] = grid[row][col] + dp[row][col+1];
                continue;
            }
            
            if(col===grid[0].length-1){
                dp[row][col] = grid[row][col] + dp[row+1][col];
                continue;
            }
            
            dp[row][col] = grid[row][col]+Math.min(dp[row+1][col], dp[row][col+1]);
        }
    }
    
    return dp[0][0];
};