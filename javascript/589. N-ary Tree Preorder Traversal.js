// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	let traversal = [];
	dfs(root, traversal);

	return traversal;
};

var dfs = function (node, traversal) {
	if (!node) {
		return;
	}

	traversal.push(node.val);

	node.children.forEach((child) => {
		dfs(child, traversal);
	});
}