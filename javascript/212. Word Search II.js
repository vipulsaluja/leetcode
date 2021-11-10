// https://leetcode.com/problems/word-search-ii/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

let boardMap;

var findWords = function (board, words) {
	let result = new Set();
	this.trie = new Trie();

	words.forEach((word) => {
		this.trie.add(word);
	});

	let rowCount = board.length;
	let colCount = board[0].length;

	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < colCount; j++) {
			findWord(board, i, j, this.trie.root, "", result);
		}
	}

	return Array.from(result);
};

var findWord = function (board, i, j, node, wordSoFar, result) {
	if (node.end) {
		result.add(wordSoFar);
	}

	if (i < 0 || j < 0 || i === board.length || j === board[0].length || !board[i][j]) {
		return;
	}

	let ch = board[i][j];
	board[i][j] = "";
	if (node.keys.has(ch)) {
		wordSoFar += ch;

		let newNode = node.keys.get(ch);
		findWord(board, i - 1, j, newNode, wordSoFar, result);
		findWord(board, i, j - 1, newNode, wordSoFar, result);
		findWord(board, i, j + 1, newNode, wordSoFar, result);
		findWord(board, i + 1, j, newNode, wordSoFar, result);
	}
	board[i][j] = ch;
}

var Node = function () {
	this.keys = new Map();
	this.end = false;
}

var Trie = function () {
	this.root = new Node();

	this.add = function (str, node) {
		node = node || this.root;
		if (str === "") {
			node.end = true;
			return;
		}

		let currNode;
		if (!node.keys.has(str.charAt(0))) {
			currNode = new Node();
			node.keys.set(str.charAt(0), currNode);
		} else {
			currNode = node.keys.get(str.charAt(0));
		}

		return this.add(str.substring(1, str.length), currNode);
	}
}

