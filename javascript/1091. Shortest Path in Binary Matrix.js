// https://leetcode.com/problems/shortest-path-in-binary-matrix/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    if (!grid || !grid.length || !grid[0].length) return 0;

    let destinationRow = grid.length - 1;
    let destinationCol = grid[0].length - 1;

    if (grid[0][0] || grid[destinationRow][destinationCol]) return -1;

    let shortestPath = 0;
    let queue = [[0, 0]];

    grid[0][0] = 1;
    let moves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    while (queue.length) {
        shortestPath++;
        let length = queue.length;
        while (length--) {
            let [row, col] = queue.shift();
            if (row === destinationRow && col === destinationCol) {
                return shortestPath;
            }

            moves.forEach(move => {
                let [newRow, newCol] = [row + move[0], col + move[1]];
                if (isZero(grid, newRow, newCol)) {
                    // mark visited
                    grid[newRow][newCol] = 1;
                    queue.push([newRow, newCol]);
                }
            });
        }

    }

    return -1;
};

var isZero = function (grid, row, col) {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length || grid[row][col] === 1) {
        return false;
    }

    return true;
}