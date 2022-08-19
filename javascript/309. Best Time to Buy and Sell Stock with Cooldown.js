// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// https://www.youtube.com/watch?v=GY0O57llkKQ&ab_channel=Pepcoding
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let obsp = -prices[0];
    let ossp = 0;
    let ocsp = 0;
    
    for(let i=1; i<prices.length; i++){
        let nbsp = 0;
        let nssp = 0;
        let ncsp = 0;
        
        nbsp = Math.max(obsp, ocsp-prices[i]);
        nssp = Math.max(ossp, obsp+prices[i]);
        ncsp = Math.max(ocsp, ossp);
        
        obsp = nbsp;
        ossp = nssp;
        ocsp = ncsp;
    }
    
    return ossp;
};