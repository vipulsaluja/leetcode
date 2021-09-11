// https://leetcode.com/problems/connecting-cities-with-minimum-cost/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
    if (!connections || !connections.length) return 0;

    if (connections.length === 1) {
        return connections[0][2];
    }

    let minCost = 0;

    connections.sort((a, b) => a[2] - b[2]);

    let ufArr = Array.apply(null, { length: n + 1 }).map((_, i) => i);

    connections.forEach(connection => {
        let [cityA, cityB, cost] = connection;
        if (find(cityA, ufArr) !== find(cityB, ufArr)) {
            minCost += cost;

            if (union(cityA, cityB, ufArr)) {
                n--;
            }
        }
    });

    return n === 1 ? minCost : -1;
};

var union = function (a, b, arr) {
    let aFind = find(a, arr);
    let bFind = find(b, arr);
    if (aFind !== bFind) {
        arr[aFind] = bFind;
        return true;
    }
}

var find = function (city, arr) {
    if (city === arr[city]) {
        return city;
    }

    arr[city] = find(arr[city], arr);

    return arr[city];
}