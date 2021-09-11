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
    if (!head) return head;

    let dummyHead = new Node(-1, null, head, null);

    flattenDFS(dummyHead, head);

    dummyHead.next.prev = null;

    return dummyHead.next;
};

var flattenDFS = function (prev, curr) {
    if (!curr) return prev;

    curr.prev = prev;
    prev.next = curr;

    let next = curr.next;

    let tail = flattenDFS(curr, curr.child);
    curr.child = null;

    return flattenDFS(tail, next);
}