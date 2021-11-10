// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let islandCount = 0;
	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
			if (grid[rowIndex][colIndex] === "1") {
				islandCount++;
				markIslandCounted(rowIndex, colIndex, grid);
			}
		}
	}

	return islandCount;
};

let moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];

var markIslandCounted = function (rowIndex, colIndex, grid) {
	if (rowIndex < 0 || rowIndex > grid.length - 1 || colIndex < 0 || colIndex > grid[rowIndex].length - 1 || grid[rowIndex][colIndex] === "0") {
		return;
	}

	grid[rowIndex][colIndex] = "0";

	moves.forEach((move) => {
		markIslandCounted(rowIndex + move[0], colIndex + move[1], grid);
	});
}