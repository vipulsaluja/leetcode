// https://leetcode.com/problems/bus-routes/
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (!routes || !routes.length) {
        return -1;
    }
    if (source === target) {
        return 0;
    }
    let busMap = new Map();

    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            if (!busMap.has(routes[i][j])) {
                busMap.set(routes[i][j], new Set());
            }

            busMap.get(routes[i][j]).add(i);
        }
    }

    let visitedStops = new Set();
    let visitedBuses = new Set();

    let busHops = 0;
    let queue = [source];
    visitedStops.add(source);
    while (queue.length) {
        let length = queue.length;
        busHops++;
        while (length--) {
            let curr = queue.shift();
            let busesAtSource = busMap.get(curr);
            for (let [index, busIndex] of busesAtSource.entries()) {
                if (!visitedBuses.has(busIndex)) {
                    visitedBuses.add(busIndex);
                    for (let stopIndex = 0; stopIndex < routes[busIndex].length; stopIndex++) {
                        let stop = routes[busIndex][stopIndex];
                        if (!visitedStops.has(stop)) {
                            if (stop === target) {
                                return busHops;
                            }
                            queue.push(stop);
                            visitedStops.add(stop);
                        }
                    }
                }
            }
        }
    }

    return -1;
};
// *           *
// 1   2           7
//         3   6   7




//                     *       *
//             7       12
// 4   5                       15
//         6
//                             15  19
//                 9   12  13