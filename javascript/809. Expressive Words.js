/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
    let stretchyStats = getStretchyStats(s);
    let resultCount = 0;
    words.forEach((word) => {
        let wordStretchyStats = getStretchyStats(word);

        if (wordStretchyStats.length === stretchyStats.length) {
            let i = 0;
            for (i = 0; i < wordStretchyStats.length; i++) {
                if (wordStretchyStats[i].char === stretchyStats[i].char &&
                    (wordStretchyStats[i].count === stretchyStats[i].count ||
                        (wordStretchyStats[i].count < stretchyStats[i].count &&
                            stretchyStats[i].count >= 3))) {
                    continue;
                }

                break;
            }

            if (i === wordStretchyStats.length) {
                resultCount++;
            }
        }
    });

    return resultCount;
};

var getStretchyStats = function (s) {
    let stretchyStats = [{ char: s[0], count: 1 }];

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            stretchyStats[stretchyStats.length - 1].count++;
        } else {
            stretchyStats.push({ char: s[i + 1], count: 1 });
        }
    }

    return stretchyStats;
}