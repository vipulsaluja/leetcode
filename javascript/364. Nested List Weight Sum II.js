// https://leetcode.com/problems/nested-list-weight-sum-ii/
// All the integers in nested level can be added with its upr level integer sum to make the final sum.

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
    let sum = 0;
    let levelSum = 0;
    while (nestedList.length) {
        let length = nestedList.length;

        for (let i = 0; i < length; i++) {
            let nestedItem = nestedList.shift();
            if (nestedItem.isInteger()) {
                levelSum += nestedItem.getInteger();
            } else {
                nestedList = nestedList.concat(nestedItem.getList());
            }
        }

        sum += levelSum;
    }

    return sum;
};