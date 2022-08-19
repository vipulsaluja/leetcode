// https://leetcode.com/problems/interval-list-intersections/
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let [first, second] = [0, 0];
    
    let intersections = [];
    while(first < firstList.length && second < secondList.length){
        let [firstStart, firstEnd] = firstList[first];
        let [secondStart, secondEnd] = secondList[second];
        
        let start = Math.max(firstStart, secondStart);
        let end = Math.min(firstEnd, secondEnd);
        
        if(start <= end){
            intersections.push([start, end]);
        }
        
        if(firstEnd < secondEnd){
            first++;
        } else {
            second++;
        }
    }
    
    return intersections;
};