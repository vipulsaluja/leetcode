// https://leetcode.com/problems/design-browser-history/
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.history = [homepage];
    this.currIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.history = this.history.splice(0, this.currIndex + 1);
    this.history.push(url);
    this.currIndex++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    let move = Math.min(steps, this.currIndex);

    this.currIndex -= move;

    return this.history[this.currIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    let move = Math.min(steps, this.history.length - 1 - this.currIndex);

    this.currIndex += move;

    return this.history[this.currIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */