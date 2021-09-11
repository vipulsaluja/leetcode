// https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) {
        return;
    }

    let first;
    let last;

    let addNode = function (node) {
        if (last) {
            last.right = node;
            node.left = last;
        } else {
            first = node;
        }

        last = node;
    };

    let dfs = function (node) {
        if (!node) {
            return;
        }

        dfs(node.left);
        addNode(node);
        dfs(node.right);
    }

    dfs(root);

    last.right = first;
    first.left = last;

    return first;
};
