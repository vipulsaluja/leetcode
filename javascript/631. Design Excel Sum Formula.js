// https://leetcode.com/problems/design-excel-sum-formula/
/**
 * @param {number} height
 * @param {character} width
 */
var Excel = function (height, width) {
    let matWidth = width.charCodeAt(0) - "A".charCodeAt(0) + 1;
    this.mat = Array.apply(null, { length: height }).map(() => new Array(matWidth).fill(0));
    // console.log(this.mat);
};

/** 
 * @param {number} row 
 * @param {character} column 
 * @param {number} val
 * @return {void}
 */
Excel.prototype.set = function (row, column, val) {
    let columnIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    this.mat[row - 1][columnIndex] = val;

    // console.log(this.mat);
};

/** 
 * @param {number} row 
 * @param {character} column
 * @return {number}
 */
Excel.prototype.get = function (row, column) {
    // console.log(column, column.charCodeAt(0), "A".charCodeAt(0));
    let columnIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    let val = this.mat[row - 1][columnIndex];

    if (typeof val === "number") {
        if (val) {
            return val;
        }
        return val;
    }
    // console.log(val);
    return val && val.val();
};

/** 
 * @param {number} row 
 * @param {character} column 
 * @param {string[]} numbers
 * @return {number}
 */
Excel.prototype.sum = function (row, column, numbers) {
    let columnIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    this.mat[row - 1][columnIndex] = new Formula(this, numbers);

    return this.get(row, column);
};

/** 
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(height, width)
 * obj.set(row,column,val)
 * var param_2 = obj.get(row,column)
 * var param_3 = obj.sum(row,column,numbers)
 */

var Formula = function (excel, numbers) {
    this.excel = excel;
    this.numbers = numbers;
}

Formula.prototype.val = function () {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
        let number = this.numbers[i];

        if (number.indexOf(":") > -1) {
            let [[startCol, startRow], [endCol, endRow]] = number.split(":").map((cell) => [cell.substring(0, 1), cell.substring(1)]);
            // console.log(startRow);
            let startColCode = startCol.charCodeAt(0);
            let endColCode = endCol.charCodeAt(0);
            for (let row = startRow; row <= endRow; row++) {
                for (let col = startColCode; col <= endColCode; col++) {
                    sum += this.excel.get(parseInt(row), String.fromCharCode(col));
                }
            }

        } else {
            let [column, row] = number.split("");
            sum += this.excel.get(row, column);
        }
    }
    return sum;
}