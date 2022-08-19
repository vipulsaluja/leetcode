// https://leetcode.com/problems/meeting-scheduler/
/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    let increasingOrderComparator = ([aStart, aEnd], [bStart, bEnd]) => {
        if(aStart !== bStart){
            return aStart-bStart;
        }
        
        return aEnd-bEnd;
    };
    
    slots1.sort(increasingOrderComparator);
    slots2.sort(increasingOrderComparator);

    let [aPointer, bPointer] = [0,0];
    while(aPointer < slots1.length && bPointer < slots2.length) {
        let [aStart, aEnd] = slots1[aPointer];
        let [bStart, bEnd] = slots2[bPointer];
        let start = Math.max(aStart, bStart);
        let end = Math.min(aEnd, bEnd);
        
        if(end-start >= duration){
            return [start, start+duration];
        }
        
        if(aEnd < bEnd){
            aPointer++;
        } else {
            bPointer++;
        }
    }
    
    return [];
};