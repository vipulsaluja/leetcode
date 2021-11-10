// https://leetcode.com/problems/add-two-numbers-ii/
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
var addTwoNumbers = function (l1, l2) {
	let r1 = reverseLinkList(l1);
	let r2 = reverseLinkList(l2);
	let head = new ListNode(-1);
	let curr = head;

	let carry = 0;
	while (r1 || r2 || carry) {
		let sum = carry + (r1 ? r1.val : 0) + (r2 ? r2.val : 0);
		if (r1) r1 = r1.next;
		if (r2) r2 = r2.next;

		let n = sum % 10;
		carry = Math.floor(sum / 10);

		curr.next = new ListNode(n);
		curr = curr.next;
	}

	return reverseLinkList(head.next);
};


var reverseLinkList = function (head) {
	if (!head || !head.next) return head;

	let prev = null;
	let curr = head;

	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}