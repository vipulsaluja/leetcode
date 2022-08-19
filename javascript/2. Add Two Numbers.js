// https://leetcode.com/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;

    // Keep dummy node to hold the reference.
    let dummyNode = new ListNode();
    let curr = dummyNode;

    // Keep iterating until there is either list or carry is remaining.
    while(l1 || l2 || carry !== 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        carry = Math.floor(sum / 10);

        let node = new ListNode(sum % 10);

        // Advance to next node.
        curr.next = node;
        curr = node;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummyNode.next;
};