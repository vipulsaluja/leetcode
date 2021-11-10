// https://leetcode.com/problems/elimination-game/
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    return leftToRight(n);
};

var leftToRight = function (n) {
    if (n <= 2) return n;

    return 2 * rightToLeft(Math.floor(n / 2));
};

var rightToLeft = function (n) {
    if (n <= 2) return 1;

    if (n % 2 === 1) return 2 * leftToRight(Math.floor(n / 2));

    return 2 * leftToRight(Math.floor(n / 2)) - 1;
};