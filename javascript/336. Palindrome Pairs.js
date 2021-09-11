/**
 * @param {string[]} words
 * @return {number[][]}
 */

let result;
var palindromePairs = function (words) {
    let trie = new Trie();
    result = [];
    words.forEach((word, i) => {
        let reverseWord = word.split("").reverse().join("");
        trie.add(reverseWord, i);
    });

    words.forEach((word, i) => {
        trie.palindromeMatch(word, i);
    });

    return result;
};

var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.wordEnding = -1;
    this.palindromePrefixRemaining = new Set();
}

var Trie = function () {
    this.root = new Node();

    this.add = function (str, wordIndex, node) {
        node = node || this.root;
        if (str === "") {
            node.wordEnding = wordIndex;
            return;
        } else {
            if (hasPalindromeRemaining(str)) {
                node.palindromePrefixRemaining.add(wordIndex);
            }

            let currNode;
            if (!node.keys.has(str.charAt(0))) {
                currNode = new Node();
                node.keys.set(str.charAt(0), currNode);
            } else {
                currNode = node.keys.get(str.charAt(0));
            }

            return this.add(str.substring(1, str.length), wordIndex, currNode);
        }
    }

    this.palindromeMatch = function (str, wordIndex, node) {
        node = node || this.root;
        if (str === "") {
            if (node.wordEnding !== -1 &&
                node.wordEnding != wordIndex) {
                result.push([wordIndex, node.wordEnding]);
            }

            node.palindromePrefixRemaining.forEach((index) => {
                result.push([wordIndex, index])
            });
        } else if (node.wordEnding !== -1 &&
            hasPalindromeRemaining(str)) {
            result.push([wordIndex, node.wordEnding]);
        }

        if (!node.keys.has(str.charAt(0))) {
            return;
        }

        node = node.keys.get(str.charAt(0));

        return this.palindromeMatch(str.substring(1, str.length), wordIndex, node);
    }
}

var hasPalindromeRemaining = function (str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}