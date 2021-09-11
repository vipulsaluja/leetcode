// https://leetcode.com/problems/the-maze/
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
let directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
var hasPath = function (maze, start, destination) {
    if (start[0] === destination[0] && start[1] === destination[1]) {
        return true;
    }

    let visited = Array.apply(null, { length: maze.length }).map(() => new Array(maze[0].length).fill(0));
    return bfs(maze, start, destination, visited);
};

var bfs = function (maze, start, destination, visited) {
    let queue = [start];

    while (queue.length) {
        let length = queue.length;

        while (length--) {
            let [row, col] = queue.shift();
            if (row === destination[0] && col === destination[1]) {
                return true;
            }

            directions.forEach((direction) => {
                let [newRow, newCol] = move(maze, row, col, direction);
                if (row === destination[0] && col === destination[1]) {
                    return true;
                } else if (visited[newRow][newCol] === 0) {
                    queue.push([newRow, newCol]);
                    visited[newRow][newCol] = 1;
                }
            });
        }
    }

    return false;
}

var isValid = function (maze, row, col) {
    if (row < 0 || row === maze.length || col < 0 || col === maze[0].length || maze[row][col] === 1) {
        return;
    }

    return true;
}

var move = function (maze, row, col, direction) {
    let newRow, newCol;
    while (isValid(maze, row, col)) {
        newRow = row;
        newCol = col;

        [row, col] = [row + direction[0], col + direction[1]];
    }

    return [newRow, newCol];
}
