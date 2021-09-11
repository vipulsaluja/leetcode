// https://leetcode.com/problems/delete-nodes-and-return-forest/
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    let forest = [];
    let toDeleteMap = new Set(to_delete);
    deleteVal(root, forest, toDeleteMap, true);

    return forest;
};

var deleteVal = function (node, forest, toDeleteMap, isRoot) {
    if (!node) {
        return null;
    }

    let isDeleted = toDeleteMap.has(node.val);
    toDeleteMap.delete(node.val);

    if (isRoot && !isDeleted) {
        forest.push(node);
    }

    node.left = deleteVal(node.left, forest, toDeleteMap, isDeleted);
    node.right = deleteVal(node.right, forest, toDeleteMap, isDeleted);

    return isDeleted ? null : node;
}