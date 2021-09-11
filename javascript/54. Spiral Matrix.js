// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return [];

    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    let size = matrix.length * matrix[0].length;
    let spiralNums = [];
    while (spiralNums.length < size) {
        for (let i = left; i <= right && spiralNums.length < size; i++) {
            spiralNums.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && spiralNums.length < size; i++) {
            spiralNums.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left && spiralNums.length < size; i--) {
            spiralNums.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top && spiralNums.length < size; i--) {
            spiralNums.push(matrix[i][left]);
        }
        left++;
    }

    return spiralNums;
};