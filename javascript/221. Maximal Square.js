// https://leetcode.com/problems/maximal-square/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	let maxSize = 0;

	let dp = Array.apply(null, { length: matrix.length }).map(() => Array(matrix[0].length).fill(0));
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (row === 0 || col === 0 || matrix[row][col] === "0") {
				dp[row][col] = parseInt(matrix[row][col]);
				maxSize = Math.max(dp[row][col], maxSize);
				continue;
			}

			// If adjacent cells on left, top and diagonal top-left have a square, then current 
			// cell make a bigger square.
			// So min size of square in either of 3 cell plus 1.
			dp[row][col] = Math.min(dp[row - 1][col - 1], dp[row][col - 1], dp[row - 1][col]) + 1;

			// Keep the max size up to date.
			maxSize = Math.max(dp[row][col], maxSize);
		}
	}

	// Get the area of the square.
	return maxSize * maxSize;
};