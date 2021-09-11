// https://leetcode.com/problems/critical-connections-in-a-network/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
let graph, connSet, rank;
var criticalConnections = function (n, connections) {
    graph = new Map();
    connSet = new Set();
    rank = new Map();

    for (let i = 0; i < n; i++) {
        rank.set(i, null);
    }

    createGraph(connections);
    dfs(0, 0);

    return Array.from(connSet).map((conn) => [conn.split("x")[0], conn.split("x")[1]]);
};

var createGraph = function (connections) {
    for (let i = 0; i < connections.length; i++) {
        let [start, end] = connections[i];

        if (!graph.has(start)) {
            graph.set(start, []);
        }
        graph.get(start).push(end);

        if (!graph.has(end)) {
            graph.set(end, []);
        }
        graph.get(end).push(start);

        let min = Math.min(start, end);
        let max = Math.max(start, end);

        connSet.add(min + "x" + max);
    }
}

var dfs = function (node, discoveryRank) {
    if (rank.get(node) != null) {
        return rank.get(node);
    }

    rank.set(node, discoveryRank);

    let minRank = discoveryRank + 1;

    let adjacentNodes = graph.get(node);
    for (let i = 0; i < adjacentNodes.length; i++) {
        let nodeRank = rank.get(adjacentNodes[i]);
        if (nodeRank != null && nodeRank === discoveryRank - 1) {
            continue;
        }

        let recursiveRank = dfs(adjacentNodes[i], discoveryRank + 1);
        if (recursiveRank <= discoveryRank) {
            let min = Math.min(node, adjacentNodes[i]);
            let max = Math.max(node, adjacentNodes[i]);

            connSet.delete(min + "x" + max);
        }

        minRank = Math.min(minRank, recursiveRank);
    }

    return minRank;
}