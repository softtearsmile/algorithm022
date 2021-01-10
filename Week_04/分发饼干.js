/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 时O(mlogm+nlogn) 空O(logm+logn)
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0
  while (g.length && s.length) {
    let i = s.shift()
    if (g[0] <= i) {
      g.shift()
      res += 1
    }
  }
  return res
};