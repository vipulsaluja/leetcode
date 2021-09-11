// https://leetcode.com/problems/reconstruct-original-digits-from-english/
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    if (s.length < 3) {
        return "";
    }

    let charCount = new Array(123).fill(0);
    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i)]++;
    }

    let digitsCount = new Array(10).fill(0);
    digitsCount[0] = charCount["z".charCodeAt(0)];
    digitsCount[2] = charCount["w".charCodeAt(0)];
    digitsCount[4] = charCount["u".charCodeAt(0)];
    digitsCount[6] = charCount["x".charCodeAt(0)];
    digitsCount[8] = charCount["g".charCodeAt(0)];

    digitsCount[3] = charCount["h".charCodeAt(0)] - digitsCount[8];
    digitsCount[5] = charCount["f".charCodeAt(0)] - digitsCount[4];
    digitsCount[7] = charCount["s".charCodeAt(0)] - digitsCount[6];
    digitsCount[9] = charCount["i".charCodeAt(0)] - digitsCount[8] - digitsCount[6] - digitsCount[5];
    digitsCount[1] = charCount["n".charCodeAt(0)] - digitsCount[7] - 2 * digitsCount[9];

    let result = "";
    for (let i = 0; i < 10; i++) {
        if (digitsCount[i] > 0) {
            result += i.toString().repeat(digitsCount[i]);
        }
    }

    return result;
};

/*
z - 0
w - 2
u - 4
x - 6
g - 8
h - 3, 8
f - 5, 4
s - 7, 6
i - 9, 8, 6, 5
n - 1, 7, 2*9

*/