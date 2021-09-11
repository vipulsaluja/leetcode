// https://leetcode.com/problems/fraction-to-recurring-decimal/
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (denominator === 0) {
        // throw error
        return "";
    }

    if (numerator === 0) {
        return "0";
    }

    let fraction = "";
    if (numerator < 0 ^ denominator < 0) {
        fraction += "-";
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    fraction += Math.floor(numerator / denominator);

    let remainder = numerator % denominator;

    if (remainder !== 0) {
        fraction += ".";

        let remainderMap = new Map();
        while (remainder !== 0) {
            if (remainderMap.has(remainder)) {
                fraction = fraction.substring(0, remainderMap.get(remainder)) + "(" + fraction.substring(remainderMap.get(remainder)) + ")";
                break;
            }

            remainderMap.set(remainder, fraction.length);

            remainder *= 10;
            fraction += Math.floor(remainder / denominator).toString();
            remainder = remainder % denominator;
        }
    }

    return fraction;
};