// https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

var shortestPath = function (grid, k) {
    if (!grid || !grid.length || !grid[0].length) {
        return -1;
    }
    let visited = new Set();
    if (grid[0][0] === 1) {
        k--;
    }
    visited.add("0x0x" + k);

    let queue = [{ position: [0, 0], quota: k }];
    let shortestPath = 0;
    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let { position: [row, col], quota } = queue.shift();
            if (row === grid.length - 1 && col === grid[0].length - 1) {
                return shortestPath;
            }

            for (let i = 0; i < moves.length; i++) {
                let [newRow, newCol] = [row + moves[i][0], col + moves[i][1]];
                if (isValidMove(grid, newRow, newCol, quota, visited)) {
                    let consumedQuota = grid[newRow][newCol] === 1 ? 1 : 0;
                    visited.add(`${newRow}x${newCol}x${quota - consumedQuota}`);
                    queue.push({ position: [newRow, newCol], quota: quota - consumedQuota });
                }
            }
        }
        shortestPath++;
    }

    return -1;
};

var isValidMove = function (grid, row, col, quota, visited) {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) {
        return false;
    }

    if (grid[row][col] === 1) {
        return quota > 0 && !visited.has(`${row}x${col}x${quota - 1}`);
    }

    return !visited.has(`${row}x${col}x${quota}`)
}

var moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
