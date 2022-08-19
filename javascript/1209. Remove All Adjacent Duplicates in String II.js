// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    if(s.length < k) {
        return s;
    }
    
    let st = [{char: s[0], count: 1}];
    for(let i=1; i<s.length; i++){
        let top = st[st.length-1];
        
        if(top && top.char === s[i]){
            top.count++;
        } else {
            st.push({char: s[i], count: 1});
            top = st[st.length-1];
        }
        
        if(top.count === k){
            st.pop();
        }
    }
    
    return st.reduce((result, curr)=>{
        return result+(curr.char.repeat(curr.count));
    }, "");
};