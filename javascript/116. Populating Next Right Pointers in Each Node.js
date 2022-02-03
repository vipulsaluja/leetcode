// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root) {
		return root;
	}

	// Use BFS to iterate over levels.
	// In each level, set the next pointer to next node
	// in level.
	let queue = [root];
	while (queue.length) {
		let length = queue.length;
		let newQueue = [];
		for (let i = 0; i < length; i++) {
			let curr = queue[i];
			if (i !== length - 1) {
				queue[i].next = queue[i + 1];
			}

			if (curr.left) {
				newQueue.push(curr.left);
			}

			if (curr.right) {
				newQueue.push(curr.right);
			}
		}

		queue = newQueue;
	}

	return root;
};