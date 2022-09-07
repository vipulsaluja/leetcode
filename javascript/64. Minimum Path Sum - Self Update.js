// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid.length || !grid[0].length){
        return 0;
    }
        
    for(let row=grid.length-1; row>=0; row--){
        for(let col=grid[0].length-1; col>=0; col--){
            if(row===grid.length-1 && col===grid[0].length-1){
                continue;
            }
            
            if(row===grid.length-1){
                grid[row][col] = grid[row][col] + grid[row][col+1];
                continue;
            }
            
            if(col===grid[0].length-1){
                grid[row][col] = grid[row][col] + grid[row+1][col];
                continue;
            }
            
            grid[row][col] = grid[row][col]+Math.min(grid[row+1][col], grid[row][col+1]);
        }
    }
    
    return grid[0][0];
};