// https://leetcode.com/problems/first-unique-number/
/**
 * @param {number[]} nums
 */
var Node = function (num) {
    this.num = num;
    this.freq = 1;
}

Node.prototype.recordEntry = function () {
    this.freq++;
}

Node.prototype.isUnique = function () {
    return this.freq === 1;
}

var FirstUnique = function (nums) {
    this.numsList = [];
    this.numsMap = new Map();
    nums.forEach((num) => {
        this.add(num);
    });

    this.currIndex = 0;
    console.log(this.numsList);
    console.log(this.numsMap);
    this.findNextUnique();
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    if (this.currIndex < this.numsList.length) {
        return this.numsList[this.currIndex].num;
    }

    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    let node;
    if (this.numsMap.has(value)) {
        node = this.numsMap.get(value);
        node.recordEntry();
    } else {
        node = new Node(value);
        this.numsList.push(node);
        node.index = this.numsList.length - 1;
        this.numsMap.set(value, node);
    }

    if (node.index === this.currIndex) {
        this.findNextUnique();
    }
};

FirstUnique.prototype.findNextUnique = function () {
    while (this.currIndex < this.numsList.length) {
        if (this.numsMap.get(this.numsList[this.currIndex].num).isUnique()) {
            return;
        }

        this.currIndex++;
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */