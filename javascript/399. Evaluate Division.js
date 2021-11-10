// https://leetcode.com/problems/evaluate-division/
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let graph = new Map();

    equations.forEach((equation, index) => {
        let [dividend, divisor] = equation;
        if (!graph.has(dividend)) {
            graph.set(dividend, new Map());
        }

        if (!graph.has(divisor)) {
            graph.set(divisor, new Map());
        }

        let value = values[index];

        graph.get(dividend).set(divisor, value);
        graph.get(divisor).set(dividend, 1 / value);
    });

    let result = new Array(queries.length);

    queries.forEach((query, index) => {
        let [dividend, divisor] = query;
        if (!graph.has(dividend) || !graph.has(divisor)) {
            result[index] = -1;
        } else if (dividend === divisor) {
            result[index] = 1;
        } else {
            result[index] = backtrack(graph, dividend, divisor, 1, new Set());
        }
    });

    return result;
};

var backtrack = function (graph, dividend, divisor, product, visited) {
    visited.add(dividend);

    let ret = -1;

    let neighbors = graph.get(dividend);
    if (neighbors.has(divisor)) {
        ret = product * neighbors.get(divisor);
    } else {
        for (const [node, value] of neighbors.entries()) {
            if (visited.has(node)) {
                continue;
            }

            ret = backtrack(graph, node, divisor, product * value, visited);
            if (ret !== -1) {
                break;
            }
        }
    }

    visited.delete(dividend);

    return ret;
}