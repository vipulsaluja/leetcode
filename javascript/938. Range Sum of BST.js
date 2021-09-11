// https://leetcode.com/problems/range-sum-of-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    return findRangeSum(root, low, high);
};

var findRangeSum = function (node, low, high) {
    if (!node) {
        return 0;
    }
    let sum = 0;

    if (node.val > low) {
        sum += findRangeSum(node.left, low, high);
    }

    if (node.val >= low && node.val <= high) {
        sum += node.val;
    }

    if (node.val < high) {
        sum += findRangeSum(node.right, low, high);
    }

    return sum;
}