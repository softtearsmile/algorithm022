/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 时O(n) 空O(n)
  let len = prices.length
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
      arr[i] = new Array(2)
  }
  arr[0][0] = 0;
  arr[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
      arr[i][0] = Math.max(arr[i - 1][0], arr[i - 1][1] + prices[i]);
      arr[i][1] = Math.max(arr[i - 1][1], arr[i - 1][0] - prices[i]);
  }
  return arr[len - 1][0];
};