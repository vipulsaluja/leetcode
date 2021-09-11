// https://leetcode.com/problems/search-suggestions-system/
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    let trie = new Trie();
    for (let i = 0; i < products.length; i++) {
        trie.addWord(products[i]);
    }

    let matchesList = [];
    let moreMatches = true;
    for (let i = 0; i < searchWord.length; i++) {
        if (moreMatches) {
            let matches = trie.searchPrefix(searchWord[i]);
            if (!matches.length) {
                moreMatches = false;
            }
            matchesList.push(matches);
        } else {
            matchesList.push([]);
        }
    }

    // Clear the search once done.
    trie.clearSearch();

    return matchesList;
};

var Node = function (char) {
    this.char = char;
    this.isEnd = false;
    this.childMap = new Array(26);
}

var Trie = function () {
    this.root = new Node();
    this.currNode = null;
    this.currPrefix = "";
}

Trie.prototype.addWord = function (word, node) {
    node = node || this.root;

    if (word === "") {
        node.isEnd = true;
        return;
    }

    let charIndex = word.charCodeAt(0) - 97;
    if (!node.childMap[charIndex]) {
        node.childMap[charIndex] = new Node(word[0]);
    }

    this.addWord(word.substring(1), node.childMap[charIndex]);
}

Trie.prototype.searchPrefix = function (char) {
    this.currPrefix += char;
    this.currNode = this.currNode || this.root;

    let charIndex = char.charCodeAt(0) - 97;
    if (!this.currNode.childMap[charIndex]) {
        return [];
    }

    this.currNode = this.currNode.childMap[charIndex];

    let matches = [];
    prefixDfs(this.currNode, this.currPrefix, matches);

    return matches;
}

var prefixDfs = function (node, prefix, list) {
    if (!node || list.length === 3) {
        return;
    }

    if (node.isEnd) {
        list.push(prefix);
    }

    for (let i = 0; i < 26; i++) {
        if (!node.childMap[i]) {
            continue;
        }

        let child = node.childMap[i];
        prefixDfs(child, prefix + String.fromCharCode(i + 97), list);
    }
}

Trie.prototype.clearSearch = function () {
    this.currNode = null;
    this.currPrefix = "";
}