// https://leetcode.com/problems/search-a-2d-matrix-ii/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (matrix[row] && matrix[row][col] && matrix[row][col] !== target) {
        if (matrix[row][col] < target) {
            row += 1;
        } else {
            col -= 1;
        }
    }

    return row >= matrix.length || col < 0 ? false : true;
};