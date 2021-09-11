/**
 * Initialize your data structure here.
 */
let Node = function () {
    this.val = "";
    this.childMap = new Map();
};
var Trie = function () {
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, node) {
    if (!word.length) {
        node.isEnd = true;
        return;
    }

    node = node || this.root;
    let child;
    if (node.childMap.has(word.charAt(0))) {
        child = node.childMap.get(word.charAt(0));
    } else {
        child = new Node();
        node.childMap.set(word.charAt(0), child);
    }

    this.insert(word.substring(1, word.length), child);

};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, node) {
    if (word === "" && node.isEnd) {
        return true;
    }

    node = node || this.root;

    if (node.childMap.has(word.charAt(0))) {
        return this.search(word.substring(1, word.length), node.childMap.get(word.charAt(0)));
    } else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix, node) {
    if (prefix === "") {
        return true;
    }

    node = node || this.root;

    if (node.childMap.has(prefix.charAt(0))) {
        return this.startsWith(prefix.substring(1, prefix.length), node.childMap.get(prefix.charAt(0)));
    } else {
        return false;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
