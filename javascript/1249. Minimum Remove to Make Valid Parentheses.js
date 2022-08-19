// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    if(!s) {
        return s;
    }
    
    let indexSt = [];
    let indexToRemove = new Set();
    for(let i=0; i<s.length; i++) {
        if(s[i] === "(") {
            indexSt.push(i);
            continue;
        }
        
        if(s[i] === ")") {
            if(indexSt.length) {
                indexSt.pop();
            } else {
                indexToRemove.add(i);
            }
        }
    }
    
    indexSt.forEach(indexToRemove.add, indexToRemove);

    let resultStr = "";
    for(let i=0; i<s.length; i++) {
        if(!indexToRemove.has(i)) {
            resultStr += s[i];
        }
    }
    
    return resultStr;
};