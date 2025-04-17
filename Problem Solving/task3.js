/*
*
* Given an array representing prices of the stock on different days,
* find the maximum profit that can be earned by performing maximum of
* one transaction. A transaction consists of activity of buying and
* selling the stock on different or same days.
*
*/
/*
*
* For example in this array - {100, 80, 120, 130, 70, 60, 100, 125}
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65
* (buy at 60 and sell at 125).
* For price array - {100, 80, 70, 65, 60, 55, 50}, maximum profit
* that could be earned is 0.
*
*/
// Feel free to add helper functions if needed
var maximumProfit = function(prices) {
    if (prices.length === 0) return 0;
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
      let profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
      minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
  };
  // Example usage:
  // console.log(maximumProfit([100, 80, 120, 130, 70, 60, 100, 125])); // 65
  // console.log(maximumProfit([100, 80, 70, 65, 60, 55, 50])); // 0 (edited) 

const maximumProfit = prices => {

    return function(){
        let maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                let profit = prices[j] - prices[i];
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }
        return maxProfit;
    }
    
}

const main = () =>{
const profit1 = maximumProfit([100, 80, 120, 130, 70, 60, 100, 125]);
console.log('Max Profit : ',profit1());
const profit2 = maximumProfit([100, 80, 70, 65, 60, 55, 50]);
console.log('Max Profit : ',profit2());
}

main();