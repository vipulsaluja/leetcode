// https://leetcode.com/problems/binary-tree-vertical-order-traversal/
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
var verticalTraversal = function (root) {
    if (!root) {
        return [];
    }

    let colMap = new Map();
    let queue = [{ row: 0, col: 0, node: root }];
    let minCol = 0;
    let maxCol = 0;
    while (queue.length) {
        let length = queue.length;
        let newQueue = [];
        while (length--) {
            let curr = queue.shift();

            if (!colMap.has(curr.col)) {
                colMap.set(curr.col, []);
            }
            colMap.get(curr.col).push(curr.node.val);

            // Keep track of min and max col, it will help with col ordering
            // in the end.
            minCol = Math.min(minCol, curr.col);
            maxCol = Math.max(maxCol, curr.col);

            if (curr.node.left) {
                newQueue.push({ row: curr.row + 1, col: curr.col - 1, node: curr.node.left });
            }

            if (curr.node.right) {
                newQueue.push({ row: curr.row + 1, col: curr.col + 1, node: curr.node.right });
            }
        }

        // Sort with every row as per the values.
        // Column based sorting will be taken care by map at the end.
        queue = newQueue.sort((a, b) => a.node.val - b.node.val);
    }

    let result = [];
    for (let i = minCol; i <= maxCol; i++) {
        result.push(colMap.get(i));
    }

    return result;
};