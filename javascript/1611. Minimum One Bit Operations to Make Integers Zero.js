/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n) {
    if (n <= 1) {
        return n;
    }

    let bit = 0;
    while ((1 << bit) <= n) {
        bit++;
    }

    return ((1 << bit) - 1) - minimumOneBitOperations(n - (1 << (bit - 1)));
};