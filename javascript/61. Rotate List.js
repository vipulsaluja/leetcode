// https://leetcode.com/problems/rotate-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    let oldTail = head;
    let n = 1;

    while (oldTail.next) {
        oldTail = oldTail.next;
        n++;
    }
    k = k % n;

    if (k === 0) {
        return head;
    }


    oldTail.next = head;

    let newTail = head;
    let i = 0;
    while (i < n - k - 1) {
        newTail = newTail.next;
        i++;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};