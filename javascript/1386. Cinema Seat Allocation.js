// https://leetcode.com/problems/cinema-seat-allocation/submissions/
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    let set1 = (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5);
    let set2 = (1 << 4) | (1 << 5) | (1 << 6) | (1 << 7);
    let set3 = (1 << 6) | (1 << 7) | (1 << 8) | (1 << 9);

    let maxCount = 2 * n;
    let reservedMap = new Map();
    for (let i = 0; i < reservedSeats.length; i++) {
        let [row, seat] = reservedSeats[i];
        if (!reservedMap.has(row)) {
            reservedMap.set(row, 0);
        }
        reservedMap.set(row, reservedMap.get(row) | (1 << seat));
    }

    reservedMap.forEach((seats, row) => {
        let occupiedSetCount = 0;

        if ((seats & set1) === 0) {
            occupiedSetCount++;
        }
        if ((seats & set3) === 0) {
            occupiedSetCount++;
        }
        if (occupiedSetCount === 0 && (seats & set2) === 0) {
            occupiedSetCount++;
        }

        maxCount -= (2 - occupiedSetCount);
    });

    return maxCount;
};