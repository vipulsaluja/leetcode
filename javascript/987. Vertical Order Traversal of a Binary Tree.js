// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
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
    let verticalColMap = new Map();
    createMap(root, 0, 0, verticalColMap);
    let verticalCols = Array.from(verticalColMap);

    // This can be avoided if we find the value of min and max columns when creating the map
    // then simply iterate from min to max and read values from the map.
    verticalCols.sort((a, b) => {
        return a[0] - b[0];
    });

    verticalCols = verticalCols.map((verticalCol) => {
        verticalCol[1].sort((a, b) => {
            if (a.row !== b.row) {
                return a.row - b.row;
            }

            return a.val - b.val;
        });

        return verticalCol[1].map((item) => { return item.val; });
    });

    return verticalCols;
};

var createMap = function (node, row, col, verticalColMap) {
    if (!node) {
        return;
    }

    createMap(node.left, row + 1, col - 1, verticalColMap);
    if (!verticalColMap.has(col)) {
        verticalColMap.set(col, []);
    }
    verticalColMap.get(col).push({ row: row, val: node.val });
    createMap(node.right, row + 1, col + 1, verticalColMap);
}