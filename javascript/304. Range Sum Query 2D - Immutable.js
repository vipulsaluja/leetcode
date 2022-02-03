// https://leetcode.com/problems/range-sum-query-2d-immutable/
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	let dp = Array.apply(null, { length: matrix.length + 1 }).map(() => new Array(matrix[0].length + 1).fill(0));

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			// Need to subtract dp[row][col] as it is added twice because it was overlapped in both sub-sections.
			dp[row + 1][col + 1] = dp[row + 1][col] + dp[row][col + 1] + matrix[row][col] - dp[row][col];
		}
	}

	this.dp = dp;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	// dp[row1][col1] is subtracted twice as it is overalapped between both sub-sections.
	return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */