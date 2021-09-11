// https://leetcode.com/problems/analyze-user-website-visit-pattern/
/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
    let aggregatedSorted = timestamp.map((time, i) => [username[i], time, website[i]]).sort((a, b) => {
        return a[1] - b[1];
    });

    let userMap = new Map();
    aggregatedSorted.forEach((instance) => {
        let [user, time, website] = instance;

        if (!userMap.has(user)) {
            userMap.set(user, []);
        }

        userMap.get(user).push(website);
    });

    let seqMap = new Map();
    let maxCount = 0;
    let maxPattern = [];
    userMap.forEach((userVisits) => {
        let userSeqMap = new Map();
        for (let i = 0; i < userVisits.length - 2; i++) {
            for (let j = i + 1; j < userVisits.length - 1; j++) {
                for (let k = j + 1; k < userVisits.length; k++) {
                    let pattern = `${userVisits[i]}*${userVisits[j]}*${userVisits[k]}`;
                    if (!userSeqMap.has(pattern)) {
                        userSeqMap.set(pattern, 1);
                    }

                }
            }
        }

        userSeqMap.forEach((count, pattern) => {
            if (!seqMap.has(pattern)) {
                seqMap.set(pattern, 0);
            }

            seqMap.set(pattern, seqMap.get(pattern) + 1);

            if (maxCount < seqMap.get(pattern)) {
                maxCount = seqMap.get(pattern);
                maxPattern = [pattern];
            } else if (maxCount === seqMap.get(pattern)) {
                maxPattern.push(pattern);
            }
        });
    });

    return maxPattern.length && maxPattern.sort()[0].split("*");
};