// https://leetcode.com/problems/simplify-path/submissions/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let pathSplits = path.split("/");
    let pathSt = [];
    for (let i = 0; i < pathSplits.length; i++) {
        switch (pathSplits[i]) {
            case "..":
                if (pathSt.length) pathSt.pop();
                break;
            case ".":
            case "":
                break;
            default:
                pathSt.push(pathSplits[i]);
        }
    }

    return "/" + pathSt.join("/");
};