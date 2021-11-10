// https://leetcode.com/problems/paint-house/
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
	// Cost of paint the current house depends on the cost of paint on previous house.
	// So keep on adding the min cost of previous house, if you are painting the current house
	// with a certain color.
	// To get the cost of pain of previous house, pick the min of remaining two colors.
	for (let i = 1; i < costs.length; i++) {
		// If current house is painted with 0th color, then take min of 1 and 2 for previous house.
		// Same for 1 and 2.
		costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
		costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
		costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
	}

	// Finally, pick the min of last 3 costs.
	return Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1], costs[costs.length - 1][2]);
};