// https://leetcode.com/problems/valid-triangle-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    let numberOfTriangles = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            continue;
        }

        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1; j++) {
            while (nums[k] < nums[i] + nums[j]) {
                k++;
            }

            numberOfTriangles += k - j - 1;
        }
    }

    return numberOfTriangles;
};