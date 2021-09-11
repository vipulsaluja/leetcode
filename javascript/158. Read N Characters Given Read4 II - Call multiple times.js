// https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    let pointer = 0;
    let buff = [];
    let eof = false;
    return function (buf, n) {
        if (n <= buff.length) {
            for (let i = 0; i < n; i++) {
                buf[i] = buff[i];
            }
            buff.splice(0, n);

            return n;
        }

        let charsToRead = n - buff.length;

        let extraCall = (charsToRead % 4) === 0 ? 0 : 1;
        let read4Count = Math.floor(charsToRead / 4) + extraCall;
        let actualReadCount = buff.length;
        for (let i = 0; i < read4Count && !eof; i++) {
            let readBuf = new Array(4);
            let count = read4(readBuf);
            actualReadCount += count;
            // EOF has reached
            if (count < 4) {
                eof = true;
            }
            buff = buff.concat(readBuf.splice(0, count));
        }


        let charsCountToReturn = Math.min(actualReadCount, n);
        for (let i = 0; i < charsCountToReturn; i++) {
            buf[i] = buff[i];
        }
        buff.splice(0, charsCountToReturn);


        return charsCountToReturn;
    };
};