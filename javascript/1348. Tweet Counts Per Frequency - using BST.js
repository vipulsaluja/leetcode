/*
https://leetcode.com/problems/tweet-counts-per-frequency/
*/
var Node = function (val) {
	this.val = val;
	this.right = null;
	this.left = null;
}

var BinarySearchTree = function () {
	this.root = null;

	this.insertNode = function (node, newNode) {
		if (!node) {
			return;
		}

		if (newNode.val < node.val) {
			if (!node.left) {
				node.left = newNode;
				return;
			}

			this.insertNode(node.left, newNode);
		} else if (newNode.val >= node.val) {
			if (!node.right) {
				node.right = newNode;
				return;
			}

			this.insertNode(node.right, newNode);
		}
	}

	this.removeNode = function (node, val) {
		if (!node) {
			return null;
		}

		// Move on left tree if val is less than current node val.
		if (val < node.val) {
			node.left = this.removeNode(node.left, val);
			return node;
		}

		// Move on right tree if val is greater than current node val.
		if (val > node.val) {
			node.right = this.removeNode(node.right, val);
			return node;
		}

		// Need to remove current node as val is equal to current node val.

		// In case there is no left or right, then simply set current node
		// to null.
		if (!node.left && !node.right) {
			node = null;
			return node;
		}

		// If left is null, then make right as the node.
		if (!node.left) {
			node = node.right;
			return node;
		}

		// If right is null, then make left as the node.
		if (!node.right) {
			node = node.right;
			return node;
		}

		// If left and right both are present, then take min node from right
		// and make it node.

		let minRight = this.findMinNode(node.right);
		node.val = minRight.val;

		node.right = this.removeNode(node.right, minNode.val);
		return node;
	}

	this.findMinNode = function (node) {
		if (!node) {
			return null;
		}

		// If a node, does not have the left node, then current node
		// if the min node.
		if (!node.left) {
			return node;
		}

		return this.findMinNode(node.left);
	}
}

BinarySearchTree.prototype.insert = function (val) {
	let newNode = new Node(val);

	if (!this.root) {
		this.root = newNode;
		return;
	}

	this.insertNode(this.root, newNode);
}

BinarySearchTree.prototype.remove = function (val) {
	this.root = this.removeNode(this.root, val);
}

BinarySearchTree.prototype.traverseIntervals = function (low, high, interval, counts, node = this.root) {
	if (!node) {
		return;
	}

	if (low <= node.val && node.val <= high) {
		counts[Math.floor((node.val - low + 1) / interval)]++;
	}

	if (node.val > low) {
		this.traverseIntervals(low, high, interval, counts, node.left);
	}
	if (node.val < high) {
		this.traverseIntervals(low, high, interval, counts, node.right);
	}
}


var TweetCounts = function () {
	this.tweetMap = new Map();
	this.freqs = {
		minute: 60,
		hour: 60 * 60,
		day: 24 * 60 * 60
	}
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
	if (!this.tweetMap.has(tweetName)) {
		this.tweetMap.set(tweetName, new BinarySearchTree());
	}

	this.tweetMap.get(tweetName).insert(time);
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
	if (!this.tweetMap.has(tweetName)) {
		return [];
	}

	let interval = this.freqs[freq];
	let counts = Array(Math.ceil((endTime - startTime + 1) / interval)).fill(0);
	this.tweetMap.get(tweetName).traverseIntervals(startTime, endTime, interval, counts);

	return counts;
};

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */