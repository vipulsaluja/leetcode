// https://leetcode.com/problems/all-paths-from-source-to-target/submissions/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let allPaths = [];
var allPathsSourceTarget = function (graph) {
    allPaths = [];
    dfs(graph, 0, [0]);

    return allPaths;
};

var dfs = function (graph, currNode, path) {
    if (currNode === graph.length - 1) {
        // Create new array before pushing to all paths
        // as backtrack algo is going to pop the elements 
        // from original array.
        allPaths.push([...path]);
        return;
    }

    let destinations = graph[currNode];
    destinations.forEach((destinationNode) => {
        path.push(destinationNode);
        dfs(graph, destinationNode, path);
        path.pop();
    });
}