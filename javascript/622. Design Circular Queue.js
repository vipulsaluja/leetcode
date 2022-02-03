// https://leetcode.com/problems/design-circular-queue/
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
	this.capacity = k;

	// Initialize with size 0 as there are no elements in the queue.
	this.size = 0;

	// Dummy head and tail references.
	this.head = new ListNode();
	this.tail = new ListNode();


	// Setup tail and head pointers.
	this.head.prev = this.tail;
	this.tail.next = this.head;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
	// No space left in the queue.
	if (this.size === this.capacity) {
		return false;
	}

	// Create a new node and put in the end (tail).
	let node = new ListNode(value);

	let prev = this.tail;
	let next = this.tail.next;

	node.next = next;
	next.prev = node;

	node.prev = prev;
	prev.next = node;

	this.size++;

	return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
	// No element in the queue.
	if (this.size === 0) {
		return false;
	}

	// Dequeue happens from the front(head).
	let node = this.head.prev;

	let prev = node.prev;
	let next = this.head;

	prev.next = next;
	next.prev = prev;

	this.size--;

	return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
	if (this.size === 0) {
		return -1;
	}

	return this.head.prev.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
	if (this.size === 0) {
		return -1;
	}

	return this.tail.next.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
	if (this.size === 0) {
		return true;
	}

	return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
	if (this.size === this.capacity) {
		return true;
	}

	return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */