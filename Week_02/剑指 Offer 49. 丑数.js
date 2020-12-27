/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  /**
   * 动态规划
   * 时O(n) 空O(n)
   */
  let arr = new Array(n)
  let p2 = 0, p3 = 0, p5 = 0
  arr[0] = 1
  for (let i = 1; i < n; i++) {
      let [a, b, c] = [arr[p2] * 2, arr[p3] * 3, arr[p5] * 5]
      let min = Math.min(a, b, c)
      if (a === min) p2++
      if (b === min) p3++
      if (c === min) p5++
      arr[i] = min
  }
  return arr.pop()
};