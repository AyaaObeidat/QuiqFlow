function coinCombination(amount) {
    const coins = [ 1 , 2, 5, 10, 20, 50, 100 , 200]; 
    const ways = new Array(amount + 1).fill(0);
    ways[0] = 1;
  
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        ways[i] += ways[i - coin];
      }
    }
    console.log(ways);
    return ways[amount];
  }
 console.log(coinCombination(200));