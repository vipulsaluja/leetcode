// https://leetcode.com/problems/all-paths-from-source-to-target/submissions/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let paths;
var allPathsSourceTarget = function (graph) {
    paths = [];

    dfs(graph, 0, [0]);

    return paths;
};

var dfs = function (graph, node, path) {
    if (node === graph.length - 1) {
        paths.push([...path]);
        return;
    }

    let destinations = graph[node];

    destinations.forEach((destinationNode) => {
        path.push(destinationNode);
        dfs(graph, destinationNode, path);
        path.pop();
    });
}