// https://leetcode.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let combinationsList = [];

    backtrack(target, candidates, 0, [], combinationsList);

    return combinationsList;
};

var backtrack = function (target, candidates, start, combinations, combinationsList) {
    if (target === 0) {
        combinationsList.push([...combinations]);
        return;
    }

    if (target < 0) {
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        combinations.push(candidates[i]);
        backtrack(target - candidates[i], candidates, i, combinations, combinationsList);
        combinations.pop();
    }
}