// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // No change if there is on row, or length of string is less than rows.
    if(numRows === 1 || s.length <= numRows){
        return s;
    }
    
    // Create rows of string to append the individual chars.
    let rows = Array.apply(null, {length: numRows}).map(()=> "");
    
    let goingDown = false;
    let currRow = 0;
    for(let i=0; i<s.length; i++){
        rows[currRow] += s[i];
        
        // Flip the direction.
        if(currRow === 0 || currRow === numRows-1){
            goingDown = !goingDown;
        }
        
        currRow += goingDown ? 1 : -1;
    }
        
    return rows.reduce((reduced, row) => {
        return reduced += row;
    }, "");
};