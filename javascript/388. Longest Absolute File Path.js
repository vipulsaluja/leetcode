// https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
    if(!input){
        return 0;
    }
    
    let longestLength = 0;
    let path = [];
    let segments = input.split("\n");
    for(const segment of segments){
        if(!segment.startsWith("\t")){
            path = [segment];
        } else {
            const nestLevel = segment.match(/\t/g).length;
            
            while(nestLevel < path.length){
                path.pop();
            }
            
            path.push(segment.replace(/\t/g, ""));
        }
        
        if(segment.includes(".")){
            longestLength = Math.max(longestLength, path.join("/").length);
        }
    }
    
    return longestLength;
};