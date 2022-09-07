// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
 let cache;
 let results;
 var letterCombinations = function(digits) {
     if(!digits.length){
         return [];
     }
     cache = new Map();
     results = [];
     dfs(0, digits, []);
     
     return results;
 };
 
 const digitMap = new Map([
     ["2", ["a","b","c"]],
     ["3", ["d","e","f"]],
     ["4", ["g","h","i"]],
     ["5", ["j","k","l"]],
     ["6", ["m","n","o"]],
     ["7", ["p","q","r","s"]],
     ["8", ["t","u","v"]],
     ["9", ["w","x","y","z"]],
 ]);
 
 var dfs = function(index, digits, combination){
     if(index === digits.length){
         results.push([...combination].join(""));
         return;
     }
     
     let digit= digits[index];
     let letters = digitMap.get(digit);
     for(let i=0; i<letters.length; i++){
         let letter = letters[i];
         combination.push(letter);
         dfs(index+1,digits,combination);
         combination.pop(letter);
     }
 }