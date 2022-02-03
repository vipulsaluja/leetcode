// https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	let transposed = new Array(matrix[0].length).fill(0).map(() => new Array(matrix.length));

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			transposed[col][row] = matrix[row][col];
		}
	}

	return transposed;
};
