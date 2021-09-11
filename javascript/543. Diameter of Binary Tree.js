// https://leetcode.com/problems/diameter-of-binary-tree/
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

let diameter;
var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }

    diameter = 0;
    longestPath(root);

    return diameter;
};

var longestPath = function (node) {
    if (!node) {
        return 0;
    }

    let leftPath = longestPath(node.left);
    let rightPath = longestPath(node.right);

    diameter = Math.max(diameter, leftPath + rightPath);

    return Math.max(leftPath, rightPath) + 1;
}