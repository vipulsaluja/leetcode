// https://leetcode.com/problems/my-calendar-i/
var Meeting = function (start, end) {
    this.start = start;
    this.end = end;
    this.right = null;
    this.left = null;
}
var MyCalendar = function () {
    this.root = null;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    if (!this.root) {
        this.root = new Meeting(start, end);
        return true;
    }

    return insertMeeting(this.root, start, end);
};

var insertMeeting = function (node, start, end) {
    if (node.end <= start) {
        if (node.right) {
            return insertMeeting(node.right, start, end);
        }

        node.right = new Meeting(start, end);
        return true;
    }

    if (node.start >= end) {
        if (node.left) {
            return insertMeeting(node.left, start, end);
        }

        node.left = new Meeting(start, end);
        return true;
    }

    return false;
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */