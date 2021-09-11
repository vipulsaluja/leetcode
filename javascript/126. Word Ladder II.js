// https://leetcode.com/problems/word-ladder-ii/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
let currPath;
let ladders;
var findLadders = function (beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    let adjList = createAdjList(beginWord, endWord, wordSet);

    ladders = [];
    currPath = new Set([beginWord]);
    backtrack(beginWord, endWord, adjList);

    return ladders;
};

var backtrack = function (beginWord, endWord, adjList) {
    if (beginWord === endWord) {
        let tmp = Array.from(currPath);
        ladders.push(tmp);
    }

    if (!adjList.has(beginWord)) {
        return;
    }

    let conversions = adjList.get(beginWord);
    for (let i = 0; i < conversions.length; i++) {
        currPath.add(conversions[i]);
        backtrack(conversions[i], endWord, adjList);
        currPath.delete(conversions[i]);
    }
}

var createAdjList = function (beginWord, endWord, wordSet) {
    let queue = [beginWord];
    let adjList = new Map();
    wordSet.delete(beginWord);
    while (queue.length) {
        let visited = new Set();
        let newQueue = new Set();
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let currWord = queue.shift();

            for (let charIndex = 0; charIndex < currWord.length; charIndex++) {
                let currWordArr = currWord.split("");
                for (let c = 0; c < 26; c++) {
                    currWordArr[charIndex] = String.fromCharCode(97 + c);

                    let newWord = currWordArr.join("");
                    if (newWord === currWord) continue;

                    if (wordSet.has(newWord)) {
                        visited.add(newWord);

                        if (!adjList.has(currWord)) {
                            adjList.set(currWord, []);
                        }

                        adjList.get(currWord).push(newWord);
                        newQueue.add(newWord);
                    }
                }
            }
        }

        queue = Array.from(newQueue);
        visited.forEach((word) => {
            wordSet.delete(word);
        });
    }

    return adjList;
}