// https://leetcode.com/problems/insert-delete-getrandom-o1/submissions/
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.itemIndexes = new Map();
    this.items = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.itemIndexes.has(val)) {
        return false;
    }

    let index = this.items.length;
    this.itemIndexes.set(val, index);
    this.items.push(val)

    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.itemsMap.has(val)) {
        return false;
    }

    let index = this.itemIndexes.get(val);
    this.itemIndexes.delete(val);

    if (index === this.items.length - 1) {
        this.items.pop();
    } else {
        this.items[index] = this.items[this.items.length - 1];
        this.items.pop();
        this.itemIndexes.set(this.items[index], index);
    }

    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.items[Math.floor(Math.random() * this.itemIndexes.size)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */