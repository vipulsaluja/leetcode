// https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let astSt = [];
    let remaining = [];
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] < 0) {
            if (astSt.length) {
                // Negative is smaller, destroy.
                if (astSt[astSt.length - 1] > Math.abs(asteroids[i])) {
                    continue;
                }

                // Positive is smaller, keep destroying smaller positive.
                if (astSt[astSt.length - 1] < Math.abs(asteroids[i])) {
                    while (astSt[astSt.length - 1] < Math.abs(asteroids[i])) {
                        astSt.pop();
                    }

                    if (!astSt.length) {
                        remaining.push(asteroids[i]);
                        continue;
                    }

                    if (astSt[astSt.length - 1] === Math.abs(asteroids[i])) {
                        astSt.pop();
                        continue;
                    }

                    continue;
                }

                // Both equal, so destroyed both.
                astSt.pop();
            } else {
                remaining.push(asteroids[i]);
            }
        } else {
            astSt.push(asteroids[i]);
        }
    }

    return remaining.concat(astSt);
};