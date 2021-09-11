// https://leetcode.com/problems/online-stock-span/
var StockSpanner = function () {
    this.spanner = [];
    this.st = [{ price: Infinity, index: -1 }];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.spanner.push(price);

    while (this.st.length && this.st[this.st.length - 1].price <= price) {
        this.st.pop();
    }

    let lastGreater = 0;
    if (this.st.length) {
        lastGreater = this.spanner.length - this.st[this.st.length - 1].index - 1;
    } else {
        lastGreater = 1;
    }

    this.st.push({ price: price, index: this.spanner.length - 1 });

    return lastGreater;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */