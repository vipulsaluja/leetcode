// https://leetcode.com/problems/number-of-atoms/
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    if(!formula) {
        return formula;
    }
    
    let i=0;
    let st = [];
    let curr = new Map();
    while(i<formula.length){
        if(formula[i] === "(") {
            i++;

            st.push(curr);
            curr = new Map();
            
            continue;
        }
        
        if(formula[i] === ")"){
            i++;

            // take curr and multiply with following number.
            let [num, indexAfterNum] = readNumber(formula, i);
            i = indexAfterNum;
            
            let last = st[st.length-1];
            curr.forEach((value, key) => {
                curr.set(key, value*num);
                
                if(last){
                    last.set(key, (last.get(key) || 0)+curr.get(key));
                }
            });
            
            if(last){
                curr = st.pop();
            }
            
            continue;
        }
        
        let [element, indexAfterElement] = readElement(formula, i);
        i = indexAfterElement;
        let [number, indexAfterNumber] = readNumber(formula, i);
        i = indexAfterNumber;
        curr.set(element, (curr.get(element) || 0) + number);
    }
    
    let sorted = Array.from(curr, ([element, count]) => ({element, count}))
    .sort((a, b)=>{
       return a.element.localeCompare(b.element); 
    });
    return sorted.reduce((final, {element, count}) => {
        return final += (element + (count > 1 ? count : ""));
    }, "");
    
};

var readElement = function(formula, i){
    if(!isUpper(formula[i])){
        return ["", i];
    }
    
    let element = formula[i++];
    while(isLower(formula[i])){
        element += formula[i];
        i++;
    }
    
    return [element, i];
}

var readNumber = function(formula, i) {
    if(!isNumber(formula[i])){
        return [1, i];
    }
    
    let num = formula[i++];
    while(isNumber(formula[i])) {
        num += formula[i];
        i++;
    }
    
    return [parseInt(num, 10), i];
}

var isUpper = function(char) {
    return char && char.match(/[A-Z]/);
}

var isLower = function(char) {
    return char && char.match(/[a-z]/);
}

var isNumber = function(char) {
    return char && char.match(/[0-9]/);
}