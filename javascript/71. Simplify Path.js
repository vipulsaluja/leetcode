// https://leetcode.com/problems/simplify-path/submissions/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let pathSplits = path.split("/");
    let pathSt = [];
    for (let pathSplit of pathSplits) {
        switch (pathSplit) {
            case "..":
                if (pathSt.length) pathSt.pop();
                break;
            case ".":
            case "":
                break;
            default:
                pathSt.push(pathSplit);
        }
    }

    return "/" + pathSt.join("/");
};