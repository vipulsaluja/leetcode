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

    // Initialize global variable.
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

    // Longest diameter, may or may not include root, so take the max
    // of all nodes.
    diameter = Math.max(diameter, leftPath + rightPath);

    // For any node, longest path would be either left or right and
    // plus for the node itself.
    return Math.max(leftPath, rightPath) + 1;
}