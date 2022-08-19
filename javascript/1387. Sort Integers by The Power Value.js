// https://leetcode.com/problems/sort-integers-by-the-power-value/
/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
let cache;
var getKth = function(lo, hi, k) {
    if((hi-lo+1) < k){
        return;
    }
    
    let numArr = [];
    cache = new Map();
    
    for(let i=lo; i<=hi; i++){
        numArr.push(i);
    }
    
    return numArr.sort((a, b)=>{
        let aPower = getPowerValue(a);
        let bPower = getPowerValue(b);
        
        if(aPower === bPower){
            return a - b;
        }
        
        return aPower - bPower;
    })[k-1];
};

var getPowerValue = function(num) {
    if(num === 1){
        return 0;
    }
    
    if(cache.has(num)){
        return cache.get(num);
    }
    
    let power = 0;
    if(num % 2 === 0){
        power = getPowerValue(num/2)+1;
    } else {
        power = getPowerValue((3*num)+1)+1;
    }
    
    cache.set(num, power);
    
    return power;
}