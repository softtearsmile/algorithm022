/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 时O(nlogn) 空O(n)
  intervals.sort((a, b) => a[0] - b[0])

  let res = [intervals.shift()], pre, cur

  while (intervals.length) {
      pre = res[res.length - 1], cur = intervals.shift()
      if (pre[1] >= cur[1]) {
          continue;
      } else if (pre[1] >= cur[0]) {
          pre[1] = cur[1]
      } else {
          res.push(cur)
      }
  }

  return res
};