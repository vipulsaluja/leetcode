// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let aNode = headA;
    let bNode = headB;
    
    while(aNode != bNode){
        aNode = aNode !== null ? aNode.next : headB;
        bNode = bNode !== null ? bNode.next : headA;
    }
    
    return aNode;
};