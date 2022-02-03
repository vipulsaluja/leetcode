// https://leetcode.com/problems/smallest-string-starting-from-leaf/
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
 * @return {string}
 */
var smallestFromLeaf = function (root, s = "") {
	if (!root) return s

	// Recursive call with the string value added to s.
	let left = smallestFromLeaf(root.left, String.fromCharCode(root.val + 97) + s)
	let right = smallestFromLeaf(root.right, String.fromCharCode(root.val + 97) + s)

	//If either child node was null, it will be smaller than the opposing child. Avoid this by assigning the empty childs results with the non empty childs result. (if both are null doesnt matter)
	if (!root.left) left = right
	if (!root.right) right = left

	//Return the lexicographically string
	if (left < right) return left
	else return right
}