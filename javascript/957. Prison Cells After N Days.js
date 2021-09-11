// https://leetcode.com/problems/prison-cells-after-n-days/
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
    let stateMap = new Map();

    let fastForward;
    while (n > 0) {
        if (!fastForward) {
            let currState = cells.join("");
            if (stateMap.has(currState)) {
                n = n % (stateMap.get(currState) - n);
                fastForward = true;
            } else {
                stateMap.set(currState, n);
            }
        }

        if (n > 0) {
            n--;
            cells = nextDay(cells);
        }
    }

    return cells;
};

var nextDay = function (cells) {
    let newCells = new Array(cells.length).fill(0);

    for (let i = 1; i < cells.length - 1; i++) {
        newCells[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    }

    return newCells;
}