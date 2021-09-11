var Node = function (key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    if (capacity === 0) {
        // Cannot create a cache with zero capacity.
        return;
    }

    this.capacity = capacity;

    // Dummy head and tail nodes.
    this.head = new Node();
    this.tail = new Node();

    // Link head and tail node.
    this.head.prev = this.tail;
    this.tail.next = this.head;

    // Create node map to access the node using the key.
    this.nodeMap = new Map();

    this.addNode = function (node) {
        let next = this.head;
        let prev = this.head.prev;

        node.next = next;
        next.prev = node;

        node.prev = prev;
        prev.next = node;
    };

    this.removeTail = function () {
        // Remove from linked list and map.
        let node = this.tail.next;

        this.removeNode(node);

        // need to return something.
        return node;
    };

    this.removeNode = function (node) {
        let next = node.next;
        let prev = node.prev;

        next.prev = prev;
        prev.next = next;
    }

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.nodeMap.has(key)) {
        return -1;
    }

    // Find the node and update it to be recently used.
    let node = this.nodeMap.get(key);

    // To make it recently used, remove the node
    // and add as a new node.
    this.removeNode(node);
    this.addNode(node);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.nodeMap.has(key)) {
        // The node already exists, just update the value
        let node = this.nodeMap.get(key);
        node.val = value;

        // Since this node is considered to be "used" as it is recently updated.
        // So make it recently used by removing it and adding as a new node.
        this.removeNode(node);
        this.addNode(node);
    } else {
        // Capacity has reached but we need to add a new element.
        // So remove the LRU element and then add the new one.
        if (this.capacity === this.nodeMap.size) {
            let removedNode = this.removeTail();
            this.nodeMap.delete(removedNode.key);
        }

        let node = new Node(key, value);
        this.nodeMap.set(key, node);
        this.addNode(node);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */