// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
    let nodeMap = new Map();

    let pNode = p,
        qNode = q;
    while (pNode || qNode) {
        if (pNode) {
            if (nodeMap.has(pNode.val)) {
                return nodeMap.get(pNode.val);
            } else {
                nodeMap.set(pNode.val, pNode);
                pNode = pNode.parent;
            }
        }

        if (qNode) {
            if (nodeMap.has(qNode.val)) {
                return nodeMap.get(qNode.val);
            } else {
                nodeMap.set(qNode.val, qNode);
                qNode = qNode.parent;
            }
        }
    }
};