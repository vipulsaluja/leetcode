// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	if (!root) {
		return [];
	}

	let traversal = [];

	traverse(root, traversal);

	return traversal;
};

var traverse = function (node, traversal) {
	if (!node) {
		return;
	}

	if (node.left) {
		traverse(node.left, traversal);
	}

	traversal.push(node.val);

	if (node.right) {
		traverse(node.right, traversal);
	}
}