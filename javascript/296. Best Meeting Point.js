// https://leetcode.com/problems/best-meeting-point/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    let xCords = [];
    let yCords = [];
    
    for(let row=0; row<grid.length; row++){
        for(let col=0; col<grid[0].length; col++){
            if(grid[row][col] === 1){
                xCords.push(row);
            }
        }
    }
    
    for(let col=0; col<grid[0].length; col++){
        for(let row=0; row<grid.length; row++){
            if(grid[row][col] === 1){
                yCords.push(col);
            }
        }
    }
    
    // Median point is the shortest Manhattan distance.
    let meetX = xCords[Math.floor(xCords.length/2)];
    let meetY = yCords[Math.floor(yCords.length/2)];
    
    let distance = 0;
    xCords.forEach(x => {
        distance += Math.abs(x - meetX);
    });
    yCords.forEach(y => {
        distance += Math.abs(y - meetY);
    });
    
    return distance;
};