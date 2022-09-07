// https://leetcode.com/problems/the-maze/
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
 const moves = [[-1,0],[0,1],[1,0],[0,-1]];

 var hasPath = function(maze, start, destination) {
     let visited = new Set();
     return dfs(maze, start, destination, visited);
 };
 
 var dfs = function(maze, [currRow, currCol], [targetRow, targetCol], visited){
     if(visited.has(`${currRow}x${currCol}`)){
         return false;
     }
     visited.add(`${currRow}x${currCol}`);
     
     if(currRow === targetRow && currCol === targetCol){
         return true;
     }
     
     for(let [rowOffset, colOffset] of moves){
         let [row, col] = [currRow, currCol];
         while(maze[row+rowOffset]?.[col+colOffset] === 0){
             row += rowOffset;
             col += colOffset;
         }
         
         if(dfs(maze, [row, col], [targetRow, targetCol], visited)){
             return true;
         }
     }
     
     return false;
 }