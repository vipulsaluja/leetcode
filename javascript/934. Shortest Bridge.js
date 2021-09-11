// https://leetcode.com/problems/shortest-bridge/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
    let visited = Array.apply(null, { length: grid.length }).map(() => new Array(grid[0].length).fill(0));
    let queue = [];
    let islandNotFound = true;
    for (let row = 0; row < grid.length && islandNotFound; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                islandNotFound = false;
                dfs(grid, row, col, visited, queue);

                // No need to go further as one island is already found.
                // Now while finding another island, need to count the number of steps.
                break;
            }
        }
    }

    let bridgeLength = 0;

    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let [row, col] = queue.shift();
            for (let i = 0; i < directions.length; i++) {

                let [newRow, newCol] = [row + directions[i][0], col + directions[i][1]];
                if (newRow < 0 || newRow === grid.length || newCol < 0 || newCol === grid[0].length || visited[newRow][newCol] === 1) {
                    continue;
                }

                visited[newRow][newCol] = 1;

                // New island found.
                if (grid[newRow][newCol] === 1) {
                    return bridgeLength;
                }

                queue.push([newRow, newCol]);
            }
        }

        bridgeLength++;
    }
};
var directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
var dfs = function (grid, row, col, visited, queue) {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length || grid[row][col] === 0 || visited[row][col] === 1) {
        return;
    }

    visited[row][col] = 1;
    queue.push([row, col]);

    directions.forEach(([rowMove, colMove]) => {
        dfs(grid, row + rowMove, col + colMove, visited, queue);
    });
}