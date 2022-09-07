// https://leetcode.com/problems/rotating-the-box/
/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    for(let row of box) {
        for(let col=row.length-2; col>=0; col--){
            if(row[col] === "#"){
                let nextCol = col+1;
                while(nextCol < row.length && row[nextCol]==="."){
                    nextCol++;
                }
                
                if(nextCol<row.length && row[nextCol]==="."){
                    row[nextCol] = "#";
                    row[col]=".";
                } else if(nextCol-1<row.length && row[nextCol-1]===".") {
                    row[nextCol-1] = "#";
                    row[col] = ".";
                }
            }
        }
    }
    
    let res = Array.from({length:box[0].length}).map(()=>new Array(box.length));
    let r = box.length;
    let c = box[0].length;
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            res[j][r-1-i]=box[i][j]
        }
      }
    
    return res;
};