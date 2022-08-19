// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    
    let leftMin = prices[0];
    let rightMax = prices[prices.length-1];
    
    let leftProfits = new Array(prices.length).fill(0);
    let rightProfits = new Array(prices.length+1).fill(0);
    
    for(let i=1; i<prices.length; i++){
        leftProfits[i] = Math.max(leftProfits[i-1], prices[i]-leftMin);
        leftMin = Math.min(leftMin, prices[i]);
        
        let r = prices.length - i -1;
        rightProfits[r] = Math.max(rightProfits[r+1], rightMax - prices[r]);
        rightMax = Math.max(rightMax, prices[r]);
    }
    
    let maxProfit = 0;
    for(let i=0; i<prices.length; i++){
        maxProfit = Math.max(maxProfit, leftProfits[i]+rightProfits[i+1]);
    }
    
    return maxProfit;
};