// https://leetcode.com/problems/find-median-from-data-stream/
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
	// This throws time limit exceeded as these priority queue are fake
	// internally they are simply sorting the elements.
	// this.maxHeap = new MaxPriorityQueue();
	// this.minHeap = new MinPriorityQueue();

	this.maxHeap = new Heap(Heap.maxComparator);
	this.minHeap = new Heap(Heap.minComparator);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
		this.maxHeap.add(num);
	} else {
		this.minHeap.add(num);
	}

	if (this.maxHeap.size() - this.minHeap.size() > 1) {
		this.minHeap.add(this.maxHeap.pop());
	} else if (this.minHeap.size() - this.maxHeap.size() > 1) {
		this.maxHeap.add(this.minHeap.pop());
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
	if (this.maxHeap.size() > this.minHeap.size()) {
		return this.maxHeap.peek();
	} else if (this.maxHeap.size() < this.minHeap.size()) {
		return this.minHeap.peek();
	} else {
		return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
	}
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var MinPriorityQueue = function () {
	this.queue = [];
	this.add = function (num) {
		this.queue.push(num);
		this.queue.sort((a, b) => { return b - a; });
	}
	this.peek = function () {
		return this.queue[this.queue.length - 1];
	}
	this.pop = function () {
		return this.queue.pop();
	}
	this.size = function () {
		return this.queue.length;
	}
}

var MaxPriorityQueue = function () {
	this.queue = [];
	this.add = function (num) {
		this.queue.push(num);
		this.queue.sort((a, b) => { return a - b; });
	}
	this.peek = function (num) {
		return this.queue[this.queue.length - 1];
	}
	this.pop = function (num) {
		return this.queue.pop();
	}
	this.size = function () {
		return this.queue.length;
	}
}


/** 
 *  custom Heap class
 */
class Heap {
	constructor(comparator) {
		this.length = 0;
		this.values = [];
		this.comparator = comparator || Heap.minComparator;
	}

	size() {
		return this.length;
	}

	add(val) {
		this.values.push(val);
		this.length++;
		this.bubbleUp();
	}

	peek() {
		return this.values[0] || null;
	}

	pop() {
		const max = this.values[0];
		const end = this.values.pop();
		this.length--;
		if (this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let parent = Math.floor((index - 1) / 2);

		while (this.comparator(this.values[index], this.values[parent]) < 0) {
			[this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
			index = parent;
			parent = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0, length = this.values.length;

		while (true) {
			let left = null,
				right = null,
				swapIndex = null,
				leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2;

			if (leftIndex < length) {
				if (this.comparator(this.values[leftIndex], this.values[index]) < 0) swapIndex = leftIndex;
			}

			if (rightIndex < length) {
				right = this.values[rightIndex];
				// In case left has been swapped then use swapped index to compare with right index
				// otherwise use left.
				if ((swapIndex !== null && this.comparator(right, left) < 0) ||
					(swapIndex === null && this.comparator(right, this.values[index]))) {
					swapIndex = rightIndex;
				}
			}

			// No potential swap found.
			if (swapIndex === null) break;

			[this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]];

			index = swapIndex;
		}
	}
}

/** 
 *  Min Comparator
 */
Heap.minComparator = (a, b) => { return a - b; }

/** 
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => { return b - a; }