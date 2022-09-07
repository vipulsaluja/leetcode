// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid.length || !grid[0].length){
        return 0;
    }
    
    let dp = new Array(grid.length).fill(0);
    
    for(let row=grid.length-1; row>=0; row--){
        for(let col=grid[0].length-1; col>=0; col--){
            if(row===grid.length-1 && col===grid[0].length-1){
                dp[col] = grid[row][col];
                continue;
            }
            
            if(row===grid.length-1){
                dp[col] = grid[row][col] + dp[col+1];
                continue;
            }
            
            if(col===grid[0].length-1){
                dp[col] = grid[row][col] + dp[col];
                continue;
            }
            
            dp[col] = grid[row][col]+Math.min(dp[col], dp[col+1]);
        }
    }
    
    return dp[0];
};