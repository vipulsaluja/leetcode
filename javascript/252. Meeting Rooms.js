// https://leetcode.com/problems/meeting-rooms/
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length < 2) {
        return true;
    }
    
    intervals.sort(([aStart, aEnd], [bStart, bEnd])=> {
        if(aStart != bStart){
            return aStart-bStart;
        }
        
        return aEnd-bEnd;
    });
    
    let [lastStart, lastEnd] = intervals[0];
    for(let i=1; i<intervals.length; i++){
        let [currStart, currEnd] = intervals[i];
        if(currStart < lastEnd) {
           return false;
        }
           
        [lastStart, lastEnd] = [currStart, currEnd];
    }
    
    return true;
};