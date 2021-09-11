// https://leetcode.com/problems/line-reflection/
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function (points) {
    if (points.length < 2) return true;

    let pointsMap = new Map();
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < points.length; i++) {
        pointsMap.set(points[i][0] + "x" + points[i][1], true);

        max = Math.max(max, points[i][0]);
        min = Math.min(min, points[i][0]);
    }

    let sum = max + min;

    for (let i = 0; i < points.length; i++) {
        if (!pointsMap.has((sum - points[i][0]) + "x" + points[i][1])) return false;
    }

    return true;
};