// https://leetcode.com/problems/maximum-average-subtree/
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
 * @return {number}
 */
let avgSum;
var maximumAverageSubtree = function (root) {
    avgSum = 0;
    getTreeDetails(root);
    return avgSum;
};

var getTreeDetails = function (node) {
    if (!node) return { sum: 0, count: 0 };

    let left = getTreeDetails(node.left);
    let right = getTreeDetails(node.right);

    let avg = (left.sum + right.sum + node.val) / (left.count + right.count + 1);

    avgSum = Math.max(avg, avgSum);

    return { sum: left.sum + right.sum + node.val, count: left.count + right.count + 1 };
}