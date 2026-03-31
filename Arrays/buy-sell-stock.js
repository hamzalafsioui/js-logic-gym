// problem: Best Time to Buy and Sell Stock
// You’re given an array `prices where prices[i] is the price of a stock on day i.
// Find the maximum profit  you can achieve — buy once and sell once later.
// prices = [7, 1, 5, 3, 6, 4]
// output : 5 => Buy at price = 1, sell at price = 6 → 6 - 1 = 5.

function buySellStock(prices) {
  let maxProfit = 0;

  let minPrice = Infinity;
  let minIndex = -1;

  let buyIndex = -1;
  let sellIndex = -1;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    // update minimum price and its index
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
      minIndex = i;
    }

    const profit = currentPrice - minPrice;

    // update max profit + indices
    if (profit > maxProfit) {
      maxProfit = profit;
      buyIndex = minIndex;
      sellIndex = i;
    }
  }

  return {
    maxProfit,
    buyIndex,
    sellIndex,
  };
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(buySellStock(prices));
