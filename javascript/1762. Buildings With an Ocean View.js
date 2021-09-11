// https://leetcode.com/problems/buildings-with-an-ocean-view/
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let maxSoFar = heights[heights.length - 1];
    let unobsIndexes = (heights.length - 1).toString();
    for (let i = heights.length - 2; i >= 0; i--) {
        if (heights[i] > maxSoFar) {
            unobsIndexes = `${i}x${unobsIndexes}`;
            maxSoFar = heights[i];
        }
    }

    return unobsIndexes.split("x").map((index) => parseInt(index));
};