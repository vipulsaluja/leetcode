// https://leetcode.com/problems/all-possible-full-binary-trees/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

let dp = new Map();
var allPossibleFBT = function (n) {
	// FBT always has odd number of nodes.
	if (!n || n % 2 !== 1) {
		return [];
	}

	if (dp.has(n)) {
		return dp.get(n);
	}

	// Base condition
	if (n === 1) {
		return [new TreeNode(0)];
	}

	let trees = [];
	// Start with 1, as need to make a tree and reserve 1 for curr node.
	// Increment in count of 2 as FBT has 0/2 child nodes always.
	for (let l = 1; l < n - 1; l += 2) {
		let r = n - 1 - l;

		let leftTrees = allPossibleFBT(l);
		let rightTrees = allPossibleFBT(r);

		// For all left and right tree combinations, make a new tree
		// but creating a new node as root.
		leftTrees.forEach((leftTree) => {
			rightTrees.forEach((rightTree) => {
				trees.push(new TreeNode(0, leftTree, rightTree));
			});
		});
	}

	dp.set(n, trees);

	return trees;
};