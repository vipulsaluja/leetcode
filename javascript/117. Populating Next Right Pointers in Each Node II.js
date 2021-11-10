// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) {
        return root;
    }

    let queue = [root];
    while (queue.length) {
        let length = queue.length;
        let prevNode = null;
        while (length--) {
            let curr = queue.shift();
            if (prevNode) {
                prevNode.next = curr;
            }

            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }

            prevNode = curr;
        }
    }

    return root;
};