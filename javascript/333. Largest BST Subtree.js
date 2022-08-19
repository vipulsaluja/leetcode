// https://leetcode.com/problems/largest-bst-subtree
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
 * @return {number}
 */
 class Node {
    constructor(min, max, size) {
        this.min = min;
        this.max = max;
        this.size = size;
    }
}
var largestBSTSubtree = function(root) {
    return largestBSTSubtreeHelper(root).size;
};

var largestBSTSubtreeHelper = function(node) {
    if(!node) {
        // Base node, which satisfy all parent nodes.
        // Min possible value as min and max possible value as max with zero size.
        return new Node(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0);
    }
    
    // Calculate left and right nodes.
    let left = largestBSTSubtreeHelper(node.left);
    let right = largestBSTSubtreeHelper(node.right);
    
    // Check if it is a valid BST.
    if(node.val > left.max && node.val < right.min) {
        return new Node(Math.min(node.val, left.min), Math.max(node.val, right.max), left.size + right.size+1);
    }
    
    // If not a valid BST then a node which cannot satisfy parent node.
    return new Node(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Math.max(left.size, right.size));
}