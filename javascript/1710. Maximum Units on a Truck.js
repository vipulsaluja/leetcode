// https://leetcode.com/problems/maximum-units-on-a-truck/
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let unitCount = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        let boxCount = Math.min(truckSize, boxTypes[i][0]);
        unitCount += boxCount * boxTypes[i][1];

        truckSize -= boxCount;

        if (truckSize === 0) {
            break;
        }
    }

    return unitCount;
};