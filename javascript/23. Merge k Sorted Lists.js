// https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	if (!lists || !lists.length) {
		return null;
	}

	while (lists.length > 1) {
		let a = lists.shift();
		let b = lists.shift();

		let mergedAB = mergeLists(a, b);

		lists.push(mergedAB);
	}

	return lists[0];
};


var mergeLists = function (listAHead, listBHead) {
	let dummy = new ListNode(0);
	let current = dummy;

	while (listAHead && listBHead) {
		if (listAHead.val < listBHead.val) {
			current.next = listAHead;
			listAHead = listAHead.next;
		} else {
			current.next = listBHead;
			listBHead = listBHead.next;
		}

		current = current.next;
	}

	current.next = listAHead || listBHead;

	return dummy.next;
}