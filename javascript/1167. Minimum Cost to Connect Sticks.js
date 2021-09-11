// https://leetcode.com/problems/minimum-cost-to-connect-sticks/
/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
    let pq = new PriorityQueue(sticks);

    let cost = 0;
    while (pq.size() !== 1) {
        let stick1 = pq.pop();
        let stick2 = pq.pop();
        let newStick = stick1 + stick2;
        cost += newStick;

        pq.add(newStick);
    }

    return cost;
};

var PriorityQueue = function (arr) {
    this.arr = arr;
    this.heapify();
}

PriorityQueue.prototype.heapify = function () {
    this.arr.sort((a, b) => b - a);
}

PriorityQueue.prototype.pop = function () {
    let poped = this.arr.pop();

    return poped;
}

PriorityQueue.prototype.size = function () {
    return this.arr.length;
}

PriorityQueue.prototype.add = function (num) {
    this.arr.push(num);
    this.heapify();
}