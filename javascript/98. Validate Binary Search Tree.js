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
 * @return {boolean}
 */
var isValidBST = function (root, max, min) {
	if (!root) {
		return true;
	}

	if ((min !== undefined && root.val <= min) || (max !== undefined && root.val >= max)) {
		return false;
	}

	return isValidBST(root.left, root.val, min) && isValidBST(root.right, max, root.val)
};