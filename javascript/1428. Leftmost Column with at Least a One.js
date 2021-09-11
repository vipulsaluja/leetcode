// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
    let [numRows, numCols] = binaryMatrix.dimensions();

    let minColIndex = numCols;
    for (let row = 0; row < numRows; row++) {
        for (let col = minColIndex - 1; col >= 0; col--) {
            if (binaryMatrix.get(row, col) === 1) {
                minColIndex = Math.min(minColIndex, col);

                // Found one row with 0th col 1.
                if (minColIndex === 0) {
                    return 0;
                }

                continue;
            }

            break;
        }
    }

    return minColIndex === numCols ? -1 : minColIndex;
};