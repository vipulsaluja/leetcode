// https://leetcode.com/problems/text-justification/submissions/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let wordIndex = 0;
    let lines = [];
    while (wordIndex < words.length) {
        let line = [words[wordIndex] + " "];
        wordIndex++;

        while (wordIndex < words.length) {
            if (([...line, words[wordIndex]].join("").length) <= maxWidth) {
                line.push(words[wordIndex] + " ")
                wordIndex++;
            } else {
                break;
            }
        }

        line[line.length - 1] = line[line.length - 1].trim();


        let spacesNeeded = maxWidth - [...line].join("").length;

        // Either there is only one word in line or it is the last line
        // in both scenario add all the spaces at the end, meaning in the last word of the line.
        if (line.length === 1 || wordIndex === words.length) {
            line[line.length - 1] = line[line.length - 1].padEnd(line[line.length - 1].length + spacesNeeded, " ");
        } else {
            // Distribute equally and then divide extra starting from left.
            let gapCount = line.length - 1;
            let spacesPerGap = 0;
            let extraSpaces = 0;
            if (spacesNeeded > gapCount) {
                spacesPerGap = Math.floor(spacesNeeded / gapCount);
                extraSpaces = spacesNeeded % gapCount;
            } else if (spacesNeeded === gapCount) {
                spacesPerGap = Math.floor(spacesNeeded / gapCount);
            } else {
                extraSpaces = spacesNeeded % gapCount;
            }

            let index = 0;
            while (spacesNeeded) {
                let addExtraSpace = 0;
                if (extraSpaces) {
                    addExtraSpace = 1;
                    extraSpaces--;
                }
                line[index] += " ".repeat(spacesPerGap + addExtraSpace);

                index++;
                spacesNeeded -= (spacesPerGap + addExtraSpace);
            }
        }

        lines.push(line);
    }

    return lines.map(line => line.join(""));
};