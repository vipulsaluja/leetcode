// https://leetcode.com/problems/kill-process/
/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
    // Create process graph using pid and ppid.
    // Graph is helpful in finding child processes.
    let adjList = createAdjList(pid, ppid);

    // Initialize the queue with the process to be killed.
    // Keep adding process children and then grandchildren and
    // so on.
    let queue = [kill];
    let processesToKill = [];

    // Using BFS to find child process.
    while (queue.length) {
        let length = queue.length;

        while (length--) {
            let curr = queue.shift();
            processesToKill.push(curr);

            if (adjList.get(curr)) {
                queue = queue.concat(adjList.get(curr));
            }
        }
    }

    return processesToKill;
};

var createAdjList = function (pid, ppid) {
    let adjList = new Map();

    for (let i = 0; i < ppid.length; i++) {
        if (!adjList.has(ppid[i])) {
            adjList.set(ppid[i], []);
        }

        adjList.get(ppid[i]).push(pid[i]);
    }

    return adjList;
}