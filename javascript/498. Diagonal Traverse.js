// https://leetcode.com/problems/diagonal-traverse/
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    if (!mat || !mat.length || !mat[0].length) {
        return [];
    }

    // direction 1 means up
    // 0 means down
    let direction = 1;
    let rowsCount = mat.length;
    let colsCount = mat[0].length;

    let [row, col] = [0, 0];
    let diagonalArr = new Array(rowsCount * colsCount);
    let diagIndex = 0;
    while (row < rowsCount && col < colsCount) {
        diagonalArr[diagIndex++] = mat[row][col];

        let newRow = row + (direction === 1 ? -1 : 1);
        let newCol = col + (direction === 1 ? 1 : -1);

        // If new position is going out of bound then special logic to change direction.
        if (newRow < 0 || newRow === rowsCount || newCol < 0 || newCol === colsCount) {
            if (direction === 1) {
                row += (col === (colsCount - 1) ? 1 : 0);
                col += (col < (colsCount - 1) ? 1 : 0);
            } else {
                col += (row === (rowsCount - 1) ? 1 : 0);
                row += (row < (rowsCount - 1) ? 1 : 0);
            }

            direction = 1 - direction;
        } else {
            row = newRow;
            col = newCol;
        }
    }

    return diagonalArr;
};