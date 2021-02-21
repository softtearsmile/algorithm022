/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // 时 O(n) 空O(n)

  if (s[0] === '0') return 0

  // 边界处理：多填充一位辅助位（前两位为1）因为后续需要用到
  let n = s.length, dp = [1, 1, ...new Array(n - 1).fill(0)]

  // DP 方程 CC的具体实现
  for (let i = 2; i <= n; i++) {
      let lastOne = s.slice(i - 1, i), lastTwo = s.slice(i - 2, i)

      if (lastOne > 0 && lastOne < 10) dp[i] += dp[i - 1]

      if (lastTwo >= 10 && lastTwo <= 26) dp[i] += dp[i - 2]
  }

  return dp[n]
};