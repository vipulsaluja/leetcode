// https://leetcode.com/problems/number-of-distinct-islands/
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

var numDistinctIslands = function (grid) {
    let pathSet = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                let path = [];
                dfs(grid, row, col, path, "S");
                path = path.join("");
                pathSet.add(path);
            }
        }
    }

    return pathSet.size;
};

let directions = [[-1, 0, 'U'], [0, 1, 'R'], [1, 0, 'D'], [0, -1, 'L']];

var dfs = function (grid, row, col, path, pathDirection) {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length || grid[row][col] === 0) {
        return;
    }

    path.push(pathDirection);
    grid[row][col] = 0;

    directions.forEach((direction) => {
        let [rowOffset, colOffset, pathDirection] = direction;
        dfs(grid, row + rowOffset, col + colOffset, path, pathDirection);
        path.push("E");
    });

    return;
}