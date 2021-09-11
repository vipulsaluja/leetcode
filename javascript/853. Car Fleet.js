// https://leetcode.com/problems/car-fleet/
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let carPositionSpeed = new Array(position.length);

    for (let i = 0; i < position.length; i++) {
        carPositionSpeed[i] = [position[i], speed[i]];
    }

    carPositionSpeed.sort((carA, carB) => {
        return carB[0] - carA[0];
    });

    let slowest = (target - carPositionSpeed[0][0]) / carPositionSpeed[0][1];
    let fleetCount = 1;
    for (let i = 1; i < carPositionSpeed.length; i++) {
        let time = (target - carPositionSpeed[i][0]) / carPositionSpeed[i][1];
        if (time > slowest) {
            slowest = time;
            fleetCount++;
        }
    }

    return fleetCount;
};


/*

target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

0   1   12

3   3   4
5   1   12

8   4   3
10  2   6




*/