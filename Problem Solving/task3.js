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