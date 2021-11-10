// https://leetcode.com/problems/two-city-scheduling/solution/
/*
Intuition: 
 - Try to pick city with lower travel cost.
 - Pick that city first for which different between cost in
   2 cities is maximum.
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    let totalCandidates = costs.length;

    let aCount = totalCandidates / 2;
    let bCount = totalCandidates / 2;

    costs.sort((a, b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
    });

    let totalCost = 0;
    let candidateIndex = 0;
    while (candidateIndex < costs.length) {
        let [aCost, bCost] = costs[candidateIndex];

        if (aCost < bCost) {
            if (aCount) {
                totalCost += aCost;
                aCount--;
            } else {
                totalCost += bCost;
                bCount--;
            }
        } else {
            if (bCount) {
                totalCost += bCost;
                bCount--;
            } else {
                totalCost += aCost;
                aCount--;
            }
        }

        candidateIndex++;
    }

    return totalCost;
};


/*

10      A
270     A
350     B
10      B

*/