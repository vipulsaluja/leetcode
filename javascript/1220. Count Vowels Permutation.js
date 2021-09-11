// https://leetcode.com/problems/count-vowels-permutation/
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    let mod = 1000000007;
    let a = 1, e = 1, i = 1, o = 1, u = 1;
    for (let count = 1; count < n; count++) {
        let aNew = (e + i + u) % mod;
        let eNew = (a + i) % mod;
        let iNew = (e + o) % mod;
        let oNew = i;
        let uNew = (o + i) % mod;

        [a, e, i, o, u] = [aNew, eNew, iNew, oNew, uNew];
    }

    return (a + e + i + o + u) % mod;
};


// a -> e
// e -> a, i
// i -> a, e, o, u
// o -> i, u
// u -> a

// a <- e, i, u
// e <- a, i
// i <- e, o
// o <- i
// u <- o, i
