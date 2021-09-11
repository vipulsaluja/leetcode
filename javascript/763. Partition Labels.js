// https://leetcode.com/problems/partition-labels/
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    if (s.length < 2) return [s.length];

    let letterMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!letterMap.has(s[i])) {
            letterMap.set(s[i], 0);
        }

        letterMap.set(s[i], letterMap.get(s[i]) + 1);
    }

    let partitions = [];
    let partLength = 0;
    let partMap = new Map();
    for (let i = 0; i < s.length; i++) {
        partLength++;

        if (!partMap.has(s[i])) {
            partMap.set(s[i], 0);
        }
        partMap.set(s[i], partMap.get(s[i]) + 1);

        if (partMap.get(s[i]) === letterMap.get(s[i])) {
            partMap.delete(s[i]);
        }

        if (!partMap.size && partLength) {
            partitions.push(partLength);
            partLength = 0;
        }
    }

    return partitions;
};