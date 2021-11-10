// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }

    let traversal = [];
    let queue = [root];
    // let level = 0;
    while (queue.length) {
        let length = queue.length;
        let levelTraversal = [];
        while (length--) {
            let currNode = queue.shift();
            levelTraversal.push(currNode.val);

            if (currNode.left) {
                queue.push(currNode.left);
            }

            if (currNode.right) {
                queue.push(currNode.right);
            }
        }

        // level++;
        traversal.push([...levelTraversal]);
    }

    return traversal;
};