/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 时 O(n) 空 O(n)
  let n = s.length, max = 0, dp = new Array(n).fill(0)

  for (let i = 1; i < n; i++) {
      if (s[i] === ')') {
          if (s[i - 1] === '(') {
              if (i - 2 >= 0) {
                  dp[i] = dp[i - 2] + 2
              } else {
                  dp[i] = 2
              }
          } else if (s[i - dp[i - 1] - 1] === '(') {
              if (i - dp[i - 1] - 2 >= 0) {
                  dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
              } else {
                  dp[i] = dp[i - 1] + 2
              }
          }
      }
      max = Math.max(max, dp[i])
  }


  return max
};