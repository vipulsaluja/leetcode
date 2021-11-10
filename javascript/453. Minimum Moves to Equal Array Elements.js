// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Since we are not interested in actual values of nums and only differences
hence adding 1 to all except one num or subtracting 1 from one num are both
same things.

Hence count the difference of all nums to minimum numbers to get the total moves.
*/
var minMoves = function (nums) {
	let min = Math.min(...nums);
	let moves = 0;
	nums.forEach((num) => {
		moves += num - min;
	});

	return moves;
};