// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) return;

    let dummy = new Node(0, null, head, null);
    let curr, prev = dummy;

    let stack = [];
    stack.push(head);

    while (stack.length) {
        let curr = stack.pop();

        prev.next = curr;
        curr.prev = prev;

        if (curr.next) stack.push(curr.next);
        if (curr.child) {
            stack.push(curr.child);
            curr.child = null;
        }

        prev = curr;
    }

    dummy.next.prev = null;
    return dummy.next;
}