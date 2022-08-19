// https://leetcode.com/problems/design-a-text-editor/
var TextEditor = function() {
    this.leftSt = [];
    this.rightSt = [];
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    for(let i=0; i<text.length; i++){
        this.leftSt.push(text[i]);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let toBeDeleted = Math.min(k, this.leftSt.length);
    for(let i=0; i<toBeDeleted; i++){
        this.leftSt.pop();
    }
    
    return toBeDeleted;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    for(let i=0; i<k && this.leftSt.length; i++){
        this.rightSt.push(this.leftSt.pop());
    }
    
    return textHelper(this.leftSt);
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    for(let i=0; i<k && this.rightSt.length; i++){
        this.leftSt.push(this.rightSt.pop());
    }
    
    return textHelper(this.leftSt);
};

var textHelper = function(st){
    let string = "";
    let upto = Math.max(st.length-10, 0);
    for(let i = st.length-1; i>=upto; i--){
        string = st[i] + string;
    }
    return string;
}

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */