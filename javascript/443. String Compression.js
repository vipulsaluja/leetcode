// https://leetcode.com/problems/string-compression/
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let lastCharacter = chars[0];
    let lastChracterCount = 1;
    let indexToPut = 0;

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === lastCharacter) {
            lastChracterCount++;
        } else if (chars[i] !== lastCharacter) {
            chars[indexToPut++] = lastCharacter;
            if (lastChracterCount > 1) {
                let charCount = lastChracterCount.toString().split("");
                for (let j = 0; j < charCount.length; j++) {
                    chars[indexToPut++] = charCount[j];
                }
            }

            lastChracterCount = 1;
            lastCharacter = chars[i];
        }
    }

    chars[indexToPut++] = lastCharacter;
    if (lastChracterCount > 1) {
        let charCount = lastChracterCount.toString().split("");
        for (let j = 0; j < charCount.length; j++) {
            chars[indexToPut++] = charCount[j];
        }
    }

    chars.splice(indexToPut, chars.length - 1);

    return chars.length;
};