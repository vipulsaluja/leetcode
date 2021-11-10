// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let st = [];

    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            st.push("(");
        } else if (s[i] === ")") {
            if (!st.length) {
                return -1;
            }
            st.pop();
        }

        max = Math.max(max, st.length);
    }

    if (st.length) {
        return -1;
    }

    return max;
};