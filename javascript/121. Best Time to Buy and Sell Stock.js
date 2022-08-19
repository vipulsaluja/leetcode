// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    
    let minPrice = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    
    for(let i=0; i<prices.length; i++){
        let price = prices[i];
		// Either update the min price, or check for the profit.
        if(price < minPrice) {
            minPrice = price;
        } else {
            max = Math.max(max, price - minPrice);
        }
    }
    
    return max;
};