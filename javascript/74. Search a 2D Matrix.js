// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || !matrix.length) {
        return false;
    }

    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0 && matrix[row][col] != target) {
        if (matrix[row][col] > target) {
            col -= 1;
        } else {
            row += 1;
        }
    }

    if (row < matrix.length && col >= 0) {
        return true;
    }

    return false;
};